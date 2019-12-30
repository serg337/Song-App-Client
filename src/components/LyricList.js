import React from "react";

function LyricList({ lyrics }) {
  const onLike = id => {
    console.log(id);
  };

  const renderLyrics = () => {
    return lyrics.map(({ id, content }) => (
      <li className='collection-item' key={id}>
        {content}
        <i onClick={() => onLike(id)} className='material-icons'>
          thumb_up
        </i>
      </li>
    ));
  };

  return <ul className='collection'>{renderLyrics()}</ul>;
}

export default LyricList;
