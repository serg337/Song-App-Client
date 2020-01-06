import { gql } from "apollo-boost";

export default gql`
  query($id: ID!) {
    song(id: $id) {
      id
      title
      lyrics {
        id
        content
        likes
      }
    }
  }
`;
