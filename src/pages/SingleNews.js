import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import styled from 'styled-components';
import { getInfo, getItem } from '../utils';
import { Heading } from '../components';
import { Link } from 'react-router-dom';
import { Comments } from '../components';
import { baseUrl } from '../apiInfo';
import {useSelector} from "react-redux"


const SingleNews = () => {
  const news = useSelector(state => state.news.news)
  console.log("news" , news)
  const history = useHistory();

  const params = useParams();
  console.log('history', history);
  console.log('params', params);
  const idUrl = params.id;
  const [singleNews, setSingleNews] = useState({});
  const { id, score, by, title, url, time, kids } = singleNews;

  const urlLink = `${baseUrl}/item/${idUrl}.json?print=pretty`;
  console.log(urlLink);

  //   singleNews  {  score, by, title } = singleNews;

  useEffect(() => {
    getInfo('get', urlLink).then(({ data }) => {
      console.log('data', data);

      const { id, score, by, title, time, url, kids } = data;
      console.log('kids', kids);
      setSingleNews({
        id,
        score,
        by,
        title,
        time,
        url,
        kids,
      });
    });
  }, []);
  return (
    <SingleItemWrapper className = "neeeeeeeeeeeeeeee">
      <Item>
        <Heading>{title}</Heading>

        <a href={url}>Link to the news</a>
        <a onClick={() => history.goBack()}>Go back</a>

        <div className="bottom">
          <Small>Author: {by}</Small>
          <Small>{new Date(time).toString().split('(')[0]}</Small>
        </div>
      </Item>
      <Comments commentsIds={kids}></Comments>
    </SingleItemWrapper>
  );
};

const SingleItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #b0cec5;
  width: 70%;
  margin: 0 auto;
`;

const Item = styled.div`
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
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
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

export default SingleNews;
