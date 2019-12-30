import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import CREATE_LYRIC from "../graphql/mutations/createLyric";

function LyricCreate(props) {
  const [content, setContent] = useState("");
  const [createLyric] = useMutation(CREATE_LYRIC);

  const onSubmit = event => {
    event.preventDefault();
    createLyric({
      variables: {
        content,
        songId: props.song
      }
    });
    setContent("");
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Input Lyric:</label>
      <input
        onChange={event => setContent(event.target.value)}
        value={content}
      />
    </form>
  );
}

export default LyricCreate;
