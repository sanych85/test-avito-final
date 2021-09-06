import './loadingSpinner.css';
import styled from 'styled-components';
import React from 'react';

const LoadingSpinner = ({item}) => {
  return (
    <div>
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <StyledText>Please wait. <StyledSpan>{item}</StyledSpan> will be updated soon</StyledText>
    </div>
  );
};

export default LoadingSpinner;

const StyledText = styled.p `
  color: #5C3A23;
font-size: 20px;
`
const StyledSpan = styled.span `
text-transform: capitalize;

`