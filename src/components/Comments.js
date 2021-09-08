import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Comment } from '.';
import axios from 'axios';
import { baseUrl } from '../apiInfo';
import { Button } from '.';
import { LoadingSpinner } from '.';
import { BiCommentDetail } from 'react-icons/bi';
import { UpdateInfo } from '.';

const Comments = ({ commentsIds, padding, type, totalComments }) => {
  console.log('commentsIds', commentsIds);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getComments = async (array) => {
    if (array) {
      setIsLoading(true);
      try {
        const promises = array.map((item) => {
          return axios.get(`${baseUrl}/item/${item}.json?print=pretty`);
        });

        const result = await (
          await Promise.all(promises)
        ).map((item) => item.data);

        setComments(result);
      } catch (err) {
        
        setIsError(err);
      }
      setIsLoading(false);
    }

    return;
  };

  useEffect(() => {
    getComments(commentsIds);
  }, [commentsIds]);
  const updateComments = () => {

    getComments(commentsIds);
  };

  const renderComments = () => {
    if (type === 'moreComments') {
      return (
        <>
          {comments &&
            comments.map((comment) => {
              return (
                <Comment
                  key={comment.id}
                  {...comment}
                  padding={padding}
                  type={type}></Comment>
              );
            })}
        </>
      );
    } else {
      return (
        <>
          {isLoading ? (
            <LoadingSpinner item="comments" />
          ) : isError ? (
            <p>{isError}</p>
          ) : (
            <CommentsWrapper>
              <span>
                <BiCommentDetail /> Comments:{totalComments}
              </span>
              <Button
                className="update"
                func={updateComments}
                color="white"
                backgroundColor="transparent"
                hoverColor="red"
                backgroundHoverColor="transparent">
                <UpdateInfo width="30px" height="30px" />
              </Button>

              {/* <span>{isUpdatedComments ? 'Your comments is updated' : ''}</span> */}
              {comments &&
                comments.map((comment) => {
                  return (
                    <Comment
                      key={comment.id}
                      {...comment}
                      padding={padding}
                      type={type}></Comment>
                  );
                })}
            </CommentsWrapper>
          )}
          
        </>
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
  width: 100%;
  border: 1px solid #000;
  position: relative;
  span {
    position: absolute;
    top: 5px;
    right: 5px;
  }
`;
