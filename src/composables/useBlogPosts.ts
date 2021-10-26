import { Context } from '@absolute-web/vsf-core';
import { useCache } from '@absolute-web/vsf-cache';
import { BlogPosts, BlogPostSearchParams } from '../types/blogPost';
import { useBlogPostsFactory, UseBlogPostsFactoryParams } from '../factories/useBlogPostsFactory';

const factoryParams: UseBlogPostsFactoryParams = {
  provide() {
    return {
      cache: useCache(),
    };
  },

  load: async (context: Context, params: BlogPostSearchParams): Promise<BlogPosts> => {
    const result: BlogPosts = (await context.$wordpress.getApi.getWordpressPosts(params)) || [];

    if (result.length) {
      context.cache.addTags(result.map(({ id }) => ({ prefix: `wp_`, value: id })));
    }

    return result;
  },
};


export default useBlogPostsFactory(factoryParams);
