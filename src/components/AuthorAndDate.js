import React from 'react';
import styled from 'styled-components';
import { ImPencil2 } from 'react-icons/im';
import { CgCalendarDates } from 'react-icons/cg';
export const AuthorAndDate = ({ by, time, padding, direction, color }) => {
  return (
    <Wrapper direction={direction}>
      <Small padding={padding} color={color}>
        <ImPencil2 />
        Author: {by}
      </Small>
      <Small padding={padding} color={color}>
        <CgCalendarDates />
        {new Date(time).toString().split('(')[0]}
      </Small>
    </Wrapper>
  );
};

export default AuthorAndDate;

const Small = styled.small`
  font-size: 1rem;
  color: ${({ color }) => color || 'grey'};
  padding: ${(props) => props.padding || '0'};
  margin-right: 5px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  padding: 0.5rem;
  justify-content: ${(props) =>
    props.direction === 'column' ? 'flex-end' : 'space-between'};
  align-items: ${(props) =>
    props.direction === 'column' ? 'flex-end' : 'space-between'};
`;
