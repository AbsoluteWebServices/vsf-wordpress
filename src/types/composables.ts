import { ComputedProperty } from '@absolute-web/vsf-core';
import { BlogPosts, BlogPostSearchParams } from './blogPost';

export interface UseBlogPostsErrors {
  load: Error | null;
}

export interface UseBlogPosts {
  posts: ComputedProperty<BlogPosts>;
  load: (params: BlogPostSearchParams) => Promise<void>;
  loading: ComputedProperty<boolean>;
  error: ComputedProperty<UseBlogPostsErrors>;
}
