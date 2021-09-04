import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {OneNews} from '../components';
import { getInfo } from '../utils.js';
import styled from 'styled-components';
import { getNews } from '../redux/actionsCreators';
import {newsUrl} from "../apiInfo"
const News = () => {
  const dispatch = useDispatch();
  const { news, loading } = useSelector((store) => store.news);
  console.log("news", news)

  useEffect(() => {
    dispatch(getNews(newsUrl));
  }, [newsUrl]);

  return (
    <Wrapper>
      {loading ? (
        <span>Loading!!</span>
      ) : (
          <NewsWrapper>
             {news&& news.length>0 && news.map(oneNews=><OneNews key = {oneNews.id} {...oneNews}></OneNews>)}
          </NewsWrapper>
   
      )}
  
    </Wrapper>
  );
};

export default News;

const Wrapper = styled.main`
  display: flex;
  /* flex-direction: column; */
  /* align-items: center; */
  justify-content: center;


`;

const NewsWrapper = styled.ul`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  flex-wrap: wrap;
  width: 70%;


`;
