import React from "react";
import { useMutation } from "@apollo/react-hooks";
import CREATE_LIKE from "../graphql/mutations/createLike";

function LyricList({ lyrics }) {
  const [addLike] = useMutation(CREATE_LIKE);
  const onLike = (id, likes) => {
    addLike({
      variables: { id: id },
      optimisticResponse: {
        __typename: "Mutation",
        addLike: {
          id: id,
          __typename: "Lyric",
          likes: likes + 1
        }
      }
    });
  };

  const renderLyrics = () => {
    return lyrics.map(({ id, content, likes }) => (
      <li className='collection-item' key={id}>
        {content}
        <div className='vote-box'>
          <i onClick={() => onLike(id, likes)} className='material-icons'>
            thumb_up
          </i>
          {likes}
        </div>
      </li>
    ));
  };

  return <ul className='collection'>{renderLyrics()}</ul>;
}

export default LyricList;
