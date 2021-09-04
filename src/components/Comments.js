import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Comment } from '.';
import axios from 'axios';
import { baseUrl } from '../apiInfo';

const Comments = ({ commentsIds, padding, type }) => {
  console.log('commentsId', commentsIds);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const getComments = async (array) => {
      if (array) {
        console.log('array', array);
        try {
          const promises = array.map((item) => {
            return axios.get(`${baseUrl}/item/${item}.json?print=pretty`);
          });
          console.log('comment promices', promises);
          const result = await Promise.all(promises);
          console.log('comments result', result);
          setComments(result);
        } catch (err) {
          console.log(err);
        }
      }
      return;
    };
    getComments(commentsIds);
  }, [commentsIds]);
  console.log('comments in comments', comments);

  const renderComments = () => {
    if (type === 'moreComments') {
      return (
        <>
          {commentsIds &&
            commentsIds.map((comment) => {
              return (
                <Comment
                  key={comment}
                  urlID={comment}
                  padding={padding}
                  type={type}></Comment>
              );
            })}
        </>
      );
    } else {
      return (
        <CommentsWrapper>
          {commentsIds &&
            commentsIds.map((comment) => {
              return (
                <Comment
                  key={comment}
                  urlID={comment}
                  padding={padding}
                  type={type}></Comment>
              );
            })}
        </CommentsWrapper>
      );
    }
  };

  return <>{renderComments()}</>;
};

export default Comments;

const CommentsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
