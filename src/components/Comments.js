import React from 'react'
import styled from 'styled-components';
import { Comment } from '.'
const Comments = ({comments, padding, type}) => {
    console.log(comments)
    console.log("padding", padding)
    return (
        <CommentsWrapper >
            {comments && comments.map((comment)=> {
                return <Comment key={comment} urlID={comment} padding = {padding} type= {type}></Comment>
            })}
        </CommentsWrapper>
    )
}

export default Comments


const CommentsWrapper = styled.div `

display: flex;
justify-content: center;
flex-direction: column;

`
