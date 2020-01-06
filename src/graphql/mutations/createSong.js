import { gql } from "apollo-boost";

export default gql`
  mutation CreateSong($title: String) {
    createSong(input: { data: { title: $title } }) {
      song {
        id
        title
        lyrics {
          id
        }
      }
    }
  }
`;
