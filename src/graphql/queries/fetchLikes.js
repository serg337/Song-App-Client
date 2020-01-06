import { gql } from "apollo-boost";

export default gql`
  query($id: ID!) {
    lyric(id: $id) {
      like
    }
  }
`;
