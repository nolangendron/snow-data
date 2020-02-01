import React from 'react';
import styled from '@emotion/styled';
import size from "../styles/size";

const Container = styled("header")`
    height: ${size.headerHeight};
    display: flex;
    flex-basis: 100%;
    grid-area: header;
    height: $admin-header-height;
    background-color: #fff;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    position: relative;
   `

export const Header = () => {
  return (
    <Container>
      <h1>BC Backcountry Weather Report</h1>
    </Container>
  )
}