import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import GET_SONGS from "../graphql/queries/fetchSongs";
import ADD_SONG from "../graphql/mutations/createSong";

function SongCreate(props) {
  const [createSong] = useMutation(ADD_SONG);
  const [title, setTitle] = useState("");

  const onSubmit = async event => {
    try {
      event.preventDefault();
      await createSong({
        variables: { title: title },
        refetchQueries: [{ query: GET_SONGS }]
      });
      props.history.push("/");
    } catch (error) {
      return { error: "Input a title" };
    }
  };

  return (
    <div>
      <Link to='/'>Back</Link>
      <h3>Create a New Song</h3>
      <form onSubmit={onSubmit}>
        <label>Song Title:</label>
        <input onChange={event => setTitle(event.target.value)} value={title} />
      </form>
    </div>
  );
}

export default withRouter(SongCreate);
