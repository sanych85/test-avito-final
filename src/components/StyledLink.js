import styled from 'styled-components';
import React from 'react';
import {StyledButton} from "./Button"

export const StyledLink = ({
  children,
  href,
  color,
  backgroundColor,
  hoverHoverBackground,
  hoverColor,
  padding,
  borderRadius
  
}) => {
  return (
    <Link as="a"
      href={href}
      color={color}
      backgroundColor={backgroundColor}
      hoverHoverBackground={hoverHoverBackground}
      hoverColor={hoverColor}
      padding= {padding}
      borderRadius= {borderRadius}
      >{children}</Link>
  );
};

const Link = styled(StyledButton) `
padding: ${({padding})=> padding || "0.3rem 1rem"};
text-decoration: none;
border-radius:${({borderRadius})=>borderRadius|| "0px"};
`
