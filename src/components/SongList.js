import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import GET_SONGS from "../graphql/queries/fetchSongs";

function SongList() {
  const { loading, error, data } = useQuery(GET_SONGS);

  const renderSongs = () => {
    if (!error) {
      if (loading) {
        return <div>Loading...</div>;
      } else {
        return data.songs.map(song => (
          <li className='collection-item' key={song.id}>
            {song.title}
          </li>
        ));
      }
    } else {
      return <div>Connection Failed</div>;
    }
  };

  return (
    <div>
      <ul className='collection'>{renderSongs()}</ul>
      <Link className='btn-floating btn-large red right' to='/create-song'>
        <i className='material-icons'>add</i>
      </Link>
    </div>
  );
}

export default SongList;
