import styled from 'styled-components';
import { Heading } from './Heading';
import { Link } from 'react-router-dom';
import { AuthorAndDate } from '.';
import { FcRating } from 'react-icons/fc';
import {device} from "./deviceSize"

const OneNews = ({ id, score, by, title, time, descedents }) => {
  console.log('device', device)
  return (
    <ListItem>
      <Heading>{title}</Heading>
      <Link to={`/news/${id}`}>Link</Link>
      <p className="score">
        {' '}
        <FcRating /> score: {score}
      </p>

      <AuthorAndDate by={by} time={time} direction="column"></AuthorAndDate>
      {/* <div className="small-wrapper">
          <Small>Author: {by}</Small>
          <Small>{new Date(time).toString().split('(')[0]}</Small>
        </div> */}
    </ListItem>
  );
};

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* border: 1px solid #000; */
  background-color: #f3dcd1;
  list-style: none;
  width: 30%;
  margin: 1rem;

  position: relative;
  -webkit-box-shadow: -5px -5px 5px -5px rgba(34, 60, 80, 0.6) inset;
  -moz-box-shadow: -5px -5px 5px -5px rgba(34, 60, 80, 0.6) inset;
  box-shadow: -5px -5px 5px -5px rgba(34, 60, 80, 0.6) inset;
  margin: 0.5rem;

  @media ${device.laptop} { 
   width: 40%
  }
  @media ${device.tablet} { 
   width: 90%
  }

  .bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .score {
      color: grey;
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



export default OneNews;
