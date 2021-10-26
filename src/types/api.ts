import { CustomQuery } from '@absolute-web/vsf-core';
import { BlogPosts, BlogPostSearchParams } from './blogPost';

export interface WordpressApiMethods {
  getWordpressPosts(params: BlogPostSearchParams, customQuery?: CustomQuery): Promise<BlogPosts>;
}
