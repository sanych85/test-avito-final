import React from 'react';
import styled from 'styled-components';
import { SiHackster } from 'react-icons/si';

const Header = ({ children, href, text }) => {
  return (
    <StyledHeader>
      
      <a href={href}>
        <SiHackster className="icon" />
        <h1>{text}</h1>

        <SiHackster className="icon" />
        {children}
      </a>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: #d9b8a3;
  a {
    display: flex;
    justify-content: center;
    text-decoration: none;
    .icon {
      width: 30px;
      height: 30px;
      color: red;
      margin: 1rem;
    }
    h1 {
      color: #594c43;
    }
  }
`;
