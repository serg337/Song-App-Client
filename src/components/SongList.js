import React from "react";
import { Link } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/react-hooks";
import GET_SONGS from "../graphql/queries/fetchSongs";
import DELETE_SONG from "../graphql/mutations/deleteSong";

function SongList() {
  const { loading, error, data } = useQuery(GET_SONGS);
  const [deleteSong] = useMutation(DELETE_SONG);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Connection Error</p>;

  const onClick = async id => {
    await deleteSong({
      variables: { id },
      refetchQueries: [{ query: GET_SONGS }]
    });
  };

  const renderSongs = () => {
    return data.songs.map(({ id, title }) => (
      <li className='collection-item' key={id}>
        <Link to={`/songs/${id}`}>{title}</Link>
        <i className='material-icons' onClick={() => onClick(id)}>
          delete
        </i>
      </li>
    ));
  };

  return (
    <div>
      <ul className='collection'>{renderSongs()}</ul>
      <Link className='btn-floating btn-large red right' to='/songs/new'>
        <i className='material-icons'>add</i>
      </Link>
    </div>
  );
}

export default SongList;
