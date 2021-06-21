import { Context } from '../../types';
import { WordpressPostsInput, WordpressPostsOutput } from '../../types/GraphQL';
import query from './query';
import { ApolloQueryResult } from 'apollo-client';

export default async (
  { config, client }: Context,
  variables: WordpressPostsInput
): Promise<ApolloQueryResult<WordpressPostsOutput>> => {
  const postsData =  await client.query({
    query: query,
    variables: variables,
    fetchPolicy: 'no-cache'
  });

  return postsData?.data?.posts || [];
};
