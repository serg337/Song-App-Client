import { gql } from "apollo-boost";

export default gql`
  mutation($id: ID!) {
    addLike(id: $id) {
      id
      likes
    }
  }
`;
