import React from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';
const Footer = () => {
  return (
    <StyledFooter>
      <Copyright>
        <span>Copyright 2021 Aleksandr Shatokhin</span>
      </Copyright>
      <a href="https://github.com/sanych85">{<FaGithub className="icon" />}</a>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  width: 100%;
  height: 80px;
  background-color: #705c53;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .icon {
    width: 30px;
    height: 30px;
    color: red;
    margin: 1rem;
  }
`;

const Copyright = styled.div`
  span {
    color: white;
  }
`;
