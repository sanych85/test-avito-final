import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import styled from 'styled-components';
import { getInfo } from '../utils';
import { Heading } from '../components';
import { Comments } from '../components';
import { baseUrl } from '../apiInfo';
import { useSelector } from 'react-redux';
import { AuthorAndDate } from '../components';
import { LoadingSpinner } from '../components';
import { device } from '../components/deviceSize';
import { StyledLink } from '../components/StyledLink';
import { Button } from '../components';
import { GoLink } from 'react-icons/go';
import { IoMdArrowRoundBack } from 'react-icons/io';
const SingleNews = () => {
  const news = useSelector((state) => state.news.news);
  const history = useHistory();
  const params = useParams();

  const idUrl = params.id;
  const [singleNews, setSingleNews] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { by, title, url, time, kids, descendants } = singleNews;

  const urlLink = `${baseUrl}/item/${idUrl}.json?print=pretty`;

  useEffect(() => {
    setIsLoading(true);
    getInfo('get', urlLink).then(({ data }) => {
      const { id, score, by, title, time, url, kids, descendants } = data;

      setSingleNews({
        id,
        score,
        by,
        title,
        time,
        url,
        kids,
        descendants,
      });
    });
    setIsLoading(false);
  }, [urlLink]);

  useEffect(() => {
    const timer = setInterval(() => {
      getInfo('get', urlLink).then(({ data }) => {
        const { id, score, by, title, time, url, kids, descendants } = data;

        setSingleNews({
          id,
          score,
          by,
          title,
          time,
          url,
          kids,
          descendants,
        });
      });
    }, 60000);
    return () => {
      clearTimeout(timer);
    };
  });
  const goBack = () => {
    history.goBack();
  };
  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <SingleItemWrapper>
          <Item>
            <Heading type="h3" color="#DF9564">
              {title}
            </Heading>

            <StyledLink
              borderRadius="30px"
              backgroundColor="#D9B8A3"
              as="a"
              href={url}>
              <GoLink />
              Watch news
            </StyledLink>

            <BottomInfoWrapper>
              <Button
                className="button_goback"
                func={goBack}
                backgroundColor="#D9B8A3"
                color="#593c28">
                <IoMdArrowRoundBack />
              </Button>
              <AuthorAndDate
                by={by}
                time={time}
                padding="3px"
                direction="column"
                color="#DF9564"
              />
            </BottomInfoWrapper>
          </Item>

          <Comments commentsIds={kids} totalComments={descendants}></Comments>
        </SingleItemWrapper>
      )}
    </>
  );
};

const SingleItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: 0 auto;
  background-color: #ffddbaad;
  @media ${device.laptopL} {
    width: 70%;
  }
  @media ${device.laptop} {
    width: 80%;
  }
  @media ${device.tablet} {
    width: 100%;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* border: 1px solid #000; */
  list-style: none;
  width: 100%;
  margin: 0px;
  position: relative;
  background-color: #593c28;
  @media ${device.mobileL} {
    width: 100%;
  }
  @media ${device.laptop} {
    width: 90%;
  }
  @media ${device.tablet} {
    width: 100%;
  }

  .bottom {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
  }
`;
const BottomInfoWrapper = styled.div`
  .button_goback {
    margin-right: 0rem;
    margin-left: 2rem;
  }
  display: flex;
  justify-content: space-between;
`;
export default SingleNews;
