import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import styled from 'styled-components';
import { getInfo } from '../utils';
import { Heading } from './Heading';
import { Link } from 'react-router-dom';
import { baseUrl } from '../apiInfo';
const OneNews = ({ idUrl ,  id,
  score,
  by,
  title,
  time,
  url,
  kids
  }) => {
  const history = useHistory();
  const params = useParams();

  const urlLink = `${baseUrl}/item/${idUrl}.json?print=pretty`;

console.log("kids", kids)
  
  return (
    <ListItem>
      <Heading>{title}</Heading>

      <Link to={`/news/${id}`}>Link</Link>
      <p></p>

      <div className="bottom">
        <p className="score">score: {score}</p>
        <div className="small-wrapper">
          <Small>Author: {by}</Small>
          <Small>{new Date(time).toString().split('(')[0]}</Small>
        </div>
      </div>

    </ListItem>
  );
};

const ListItem = styled.li`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  border: 1px solid #000;
  list-style: none;
  width: 30%;
  margin: 1rem;
  width: 30%;
  position: relative;
  /* height: 100%; */
  /* height: 170px; */
  .bottom {
    display: flex;
    flex-direction: row;

    .score {
      color: blue;
      width: 20%;
    }
    .small-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;
      width: 80%;
    }
  }
  a {
    align-items: center;
    padding: 0.3rem 0.7rem;
    background-color: #ffb693;
    /* display: inline-flex; */
    width: max-content;
    margin: 0 auto;
    color: black;
    text-decoration: none;
  }
`;

const Small = styled.small`
  order: 999;
  color: grey;

  margin-right: 5px;
`;

const StyledLink = styled(Link)`
  align-items: center;
  padding: 0.3rem 0.7rem;
  background: #634634;
`;

export default OneNews;
