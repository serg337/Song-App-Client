import { gql } from "apollo-boost";

export default gql`
  mutation CreateLyric($content: String, $songId: ID) {
    createLyric(input: { data: { content: $content, song: $songId } }) {
      lyric {
        id
        content
        song {
          id
          lyrics {
            id
            content
          }
        }
      }
    }
  }
`;
