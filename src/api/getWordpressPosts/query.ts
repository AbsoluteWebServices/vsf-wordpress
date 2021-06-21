import gql from 'graphql-tag';
import { wordpressPostFragment } from '../../fragments';

export default gql`
  query GetPosts($searchfor: String, $limit: Int) {
      posts(searchfor:$searchfor, limit: $limit) {
        ${wordpressPostFragment}
      }
  }
`;
