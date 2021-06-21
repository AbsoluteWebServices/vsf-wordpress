export interface BlogPost {
  id: number,
  date: string,
  title: string,
  url: string,
  excerpt: string,
  featuredImage: {
    src: string
  }
};

export type BlogPosts = BlogPost[];

export interface BlogPostSearchParams {
  searchfor: string,
  limit: number
};
