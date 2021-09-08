import styled from 'styled-components';
import React from 'react';


export const Button = ({
  children,
  color,
  backgroundColor,
  func,
  backgroundHoverColor,
  hoverColor, ...rest
}) => {

  return (
    <StyledButton
     {...rest}
      color={color}
      backgroundColor={backgroundColor}
      backgroundHoverColor={backgroundHoverColor}
      hoverColor={hoverColor}
      onClick={func}>
      {children}
    </StyledButton>
  );
};

export const StyledButton = styled.button`
  color: ${({ color }) => color || 'black'};
  border: none;
  outline: none;
  width: max-content;
  text-transform: uppercase;
  border-radius: 5px;
  background-color: ${({ backgroundColor }) => backgroundColor || ''};
  padding: 10px 15px;
  margin: 1rem auto;
  transition: all ease 0.5s;
  &:hover {
    color: ${({ hoverColor }) => hoverColor || ''};
    background-color: ${({ backgroundHoverColor }) =>
      backgroundHoverColor || ''};
  }
`;
