export type  WordpressPostsInput = {
  searchfor: string,
  limit: number
}

export type WordpressPostsOutput = {
  posts: [PostInterface]
}

export type PostInterface = {
  id: number,
  date: string,
  title: string,
  url: string,
  excerpt: string
}
