import { Context } from '@vue-storefront/core';
import { BlogPosts, BlogPostSearchParams } from '../types/blogPost';
import { useBlogPostsFactory, UseBlogPostsFactoryParams } from '../factories/useBlogPostsFactory';

const factoryParams: UseBlogPostsFactoryParams = {
  load: async (context: Context, params: BlogPostSearchParams): Promise<BlogPosts> => {
    const result = await context.$wordpress.api.getWordpressPosts(params);
    return result || [];
  },
};


export default useBlogPostsFactory(factoryParams);
