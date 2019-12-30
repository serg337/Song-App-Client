import { gql } from "apollo-boost";

export default gql`
  mutation($id: ID!) {
    deleteSong(input: { where: { id: $id } }) {
      song {
        id
      }
    }
  }
`;
