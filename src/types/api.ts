import { CustomQuery } from '@vue-storefront/core';
import { BlogPosts, BlogPostSearchParams } from './blogPost';

export interface WordpressApiMethods {
  getWordpressPosts(params: BlogPostSearchParams, customQuery?: CustomQuery): Promise<BlogPosts>;
}
