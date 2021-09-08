import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, OneNews } from '../components';

import styled from 'styled-components';
import { getNews } from '../redux/actionsCreators';
import { newsUrl } from '../apiInfo';
import { LoadingSpinner } from '../components';
import { device } from '../components/deviceSize';
import { UpdateInfo } from '../components';
const News = () => {
  const dispatch = useDispatch();
  const { news, loading, error } = useSelector((store) => store.news);
  console.log('news', news);

  useEffect(
    () => {
      dispatch(getNews(newsUrl));
    },
    [newsUrl],
    dispatch
  );

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(getNews(newsUrl));
    }, 60000);

    return () => {
      clearTimeout(timer);
    };
  });

  const updateNews = () => {
    dispatch(getNews(newsUrl));
  };

  return (
    <Wrapper>
      {loading ? (
        <LoadingSpinner item="news" />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <MainWrapper>
          <Button func={updateNews} backgroundColor="transparent">
            <UpdateInfo width="30px" height="30px" />
          </Button>
          <NewsWrapper>
            {news &&
              news.length > 0 &&
              news.map((oneNews) => (
                <OneNews key={oneNews.id} {...oneNews}></OneNews>
              ))}
          </NewsWrapper>
        </MainWrapper>
      )}
    </Wrapper>
  );
};

export default News;

const MainWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.section`
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
  padding: 0rem;
  @media ${device.laptop} {
    width: 90%;
  }
  @media ${device.mobileL} {
    width: 100%;
  }
`;
