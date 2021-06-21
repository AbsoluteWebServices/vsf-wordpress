import { Ref, computed } from 'vue-demi';
import {
  configureFactoryParams,
  Context,
  FactoryParams,
  Logger,
  sharedRef,
} from '@vue-storefront/core';
import { UseBlogPosts, UseBlogPostsErrors } from '../types/composables';
import { BlogPosts, BlogPostSearchParams } from '../types/blogPost';

export interface UseBlogPostsFactoryParams extends FactoryParams{
  load: (context: Context, params: BlogPostSearchParams) => Promise<BlogPosts>;
}

export function useBlogPostsFactory(
  factoryParams: UseBlogPostsFactoryParams,
) {
  return function useBlogPosts(ssrKey = 'useBlogPosts'): UseBlogPosts {
    const posts: Ref<BlogPosts> = sharedRef<BlogPosts>([], `useBlogPosts-posts-${ssrKey}`);
    const loading: Ref<boolean> = sharedRef<boolean>(false, `useBlogPosts-loading-${ssrKey}`);
    const error: Ref<UseBlogPostsErrors> = sharedRef({
      load: null,
    }, `useBlogPosts-error-${ssrKey}`);
    // eslint-disable-next-line @typescript-eslint/naming-convention,no-underscore-dangle
    const _factoryParams = configureFactoryParams(factoryParams);

    const load = async (params: BlogPostSearchParams) => {
      Logger.debug(`useBlogPosts/${ssrKey}/load`);

      try {
        loading.value = true;
        posts.value = await _factoryParams.load(params);
        error.value.load = null;
      } catch (err) {
        error.value.load = err;
        Logger.error(`useBlogPosts/${ssrKey}/load`, err);
      } finally {
        loading.value = false;
      }
    };

    return {
      posts: computed(() => posts.value),
      loading: computed(() => loading.value),
      error: computed(() => error.value),
      load,
    };
  };
}
