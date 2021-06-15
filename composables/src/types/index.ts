export type WordpressPosts = PostInterface[];

export type PostInterface = {
  id: number,
  date: string,
  title: string,
  url: string,
  excerpt: string,
  featuredImage: {
    src: string
  }
};

export type PostSearchParams = {
  searchfor: string,
  limit: number
};
