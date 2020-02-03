import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMountain } from '@fortawesome/free-solid-svg-icons';
import styled from '@emotion/styled';
import size from "../styles/size";

const Container = styled("header")`
    height: ${size.headerHeight};
    display: flex;
    flex-basis: 100%;
    grid-area: header;
    justify-content: center;
    align-items: center;
    height: $admin-header-height;
    color: #505865;
    background-color: #fff;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    position: relative;

    h1{
      font-size: 2.4em;
      padding-right: 10px;
    }
   `

export const Header = () => {
  return (
    <Container>
      <h1>BC Backcountry Weather</h1>
      <FontAwesomeIcon icon={faMountain} size='2x' />
    </Container>
  )
}