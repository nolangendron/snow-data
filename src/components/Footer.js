import React from 'react';
import styled from '@emotion/styled';
import colors from '../styles/colors';
import size from '../styles/size';

const Container = styled("footer")`
    display: flex;
    grid-area: footer;
    flex-basis: 100%;
    justify-content: space-between;
    align-items: center;
    height: ${size.footerHeight};
    padding: ${size.spacing};
    color: #4e5561;
    background-color: ${colors.footer};
`
export const Footer = () => {
  return (
    <Container>
  
    </Container>
  )
}