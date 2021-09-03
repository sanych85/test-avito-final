import React, { useEffect, useState } from 'react';
import { getInfo } from '../utils';
import { baseUrl } from '../apiInfo';
import { Comments } from '.';
import styled, { css } from 'styled-components';
const Comment = ({ urlID, type, padding }) => {
  const url = `${baseUrl}/item/${urlID}.json?print=pretty`;

  const [comment, setComment] = useState({});
  const [moreComments, setMoreComments] = useState(false);
  const { kids, text, by } = comment;
  useEffect(() => {
    getInfo('get', url).then(({ data }) => {
      setComment(data);
    });
  }, []);
  let initialPadding = 5;
  console.log('type,', type);
  const getComments = () => {
    if (type !== 'moreComments') {
      console.log('type не равен');
      return (
        <>
          <p>{text}</p>
          {kids && kids.length > 0 ? (
            <Button
              onClick={() => setMoreComments((prev) => !prev)}
              color={moreComments ? '#ffdbdb' : ''}>
              {moreComments ? 'Close Responses' : 'Watch responses'}
            </Button>
          ) : (
            ''
          )}
          <p>{by}</p>
          {moreComments && (
            <Comments
              padding={padding}
              comments={kids}
              type="moreComments"></Comments>
          )}
        </>
      );
    } else {
      console.log('type равен');
      return (
        <>
          {kids && kids.length > 0 ? (
            <Comments
              padding={padding}
              comments={kids}
              type="moreComments"></Comments>
          ) : (
            <>
              <p>{text}</p>
              <p>{by}</p>
            </>
          )}
        </>
      );
    }
  };

  // const getMoreComments = ()=> {
  //     console.log("in more comments")
  //     return <Comments comments = {kids}></Comments>
  // }
  return (
    <SingleCommentWrapper color = {type? "#eadede": "#fbfbfb"}>
      {getComments()}
      {/* <p>{text}</p>
      {kids && kids.length > 0 ? (
        <button onClick={() => setMoreComments((prev) => !prev)}>
          Watch response
        </button>
      ) : (
        ''
      )}
      {moreComments && (
        <Comments
          padding={padding}
          comments={kids}
          type="moreComments"></Comments>
      )}
      <p>{by}</p> */}
    </SingleCommentWrapper>
  );
};

export default Comment;

const SingleCommentWrapper = styled.div`
background-color: ${props=> props.color};
  border: 1px solid #000;
  margin: 10px;
  p {
    text-align: left;
    padding: 10px;
  }
`;

const Button = styled.button`
  
  background-color: ${(props) => props.color || '#edecff'};
  .active {
    background-color: red !important;
  }
`;
