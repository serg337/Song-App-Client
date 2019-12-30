import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useLazyQuery } from "@apollo/react-hooks";
import GET_SONG from "../graphql/queries/fetchSong";

function SongDetail() {
  let params = useParams();
  const [songId, setSongId] = useState("");
  const [song, setSong] = useState("");
  const [getSong, { loading, data }] = useLazyQuery(GET_SONG);

  useEffect(() => {
    setSongId(params.id);
    getSong({ variables: { id: songId } });
    if (data && data.song) {
      setSong(data.song);
    }
  }, [data, params.id, getSong, songId]);

  if (loading) {
    return null;
  } else {
    return (
      <div>
        <Link to='/'>Back</Link>
        {song && <h3>{song.title}</h3>}
      </div>
    );
  }
}

export default SongDetail;
