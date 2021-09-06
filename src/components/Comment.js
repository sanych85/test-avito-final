import React, { useState } from 'react';
import { Comments } from '.';
import styled from 'styled-components';
import { AuthorAndDate } from './';
import { AiOutlineDown,AiOutlineUp } from 'react-icons/ai';
import { Button } from '.';
const Comment = ({ type, padding, text, kids, by, time }) => {

  const [moreComments, setMoreComments] = useState(false);

  const getMoreComments = ()=> {
    setMoreComments((prev) => !prev)
  }
  const getComments = () => {
    if (type !== 'moreComments') {
      return (
        <div className="comment">
           
          <p>{text}</p>
          {kids && kids.length > 0 ? (
            <Button
              func= {getMoreComments}
              color={moreComments ? 'white' : 'white'}
              backgroundColor = {moreComments ? "#DF9564": "#A68D7C"}
              >
              {moreComments ? 'Close Responses' : 'Watch responses'}
              {moreComments ? <AiOutlineUp/> : <AiOutlineDown/>}

            </Button>

          ) : (
            ''
          )}
          <AuthorAndDate by={by} time={time} padding="10px" />

          {moreComments && (
            <>
              <Comments
                padding={padding}
                commentsIds={kids}
                type="moreComments"></Comments>
            </>
          )}
        </div>
      );
    } else {
      return (
        <>
        
          <TextComment>{text}</TextComment>
          <AuthorAndDate by={by} time={time} />
          {kids && kids.length > 0 ? (
            <Comments
              padding={padding}
              commentsIds={kids}
              type="moreComments"></Comments>
          ) : (
            <></>
          )}
        </>
      );
    }
  };

  return (
    <SingleCommentWrapper color={type ? '#eadede' : '#fbfbfb'}>
      {getComments()}
    </SingleCommentWrapper>
  );
};

export default Comment;

const SingleCommentWrapper = styled.div`
  background-color: ${(props) => props.color};
  border: 1px solid #000;
  margin: 10px;
  p {
    text-align: left;
    padding: 10px;
  }
`;

// const Button = styled.button`
//   background-color: ${(props) => props.color || '#edecff'};
//   padding: 0.5rem 1rem;
//   .active {
//     background-color: red !important;
//   }
// `;

const TextComment = styled.p `
word-wrap: break-word;
`
