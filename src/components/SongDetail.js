import React from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import LyricCreate from "./LyricCreate";
import LyricList from "./LyricList";
import GET_SONG from "../graphql/queries/fetchSong";

function SongDetail() {
  let params = useParams();
  const { loading, error, data } = useQuery(GET_SONG, {
    variables: { id: params.id }
  });
  if (error) return `Error! ${error}`;
  if (loading) {
    return null;
  } else {
    const { song } = data;
    return (
      <div>
        <Link to='/'>Back</Link>
        <div>
          <h3>{song.title}</h3>
          <LyricList lyrics={song.lyrics} />
          <LyricCreate song={song.id} />
        </div>
      </div>
    );
  }
}

export default SongDetail;
