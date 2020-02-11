import React from 'react';
import './App.css';
import styled from "@emotion/styled";
import size from "../src/styles/size";
import Main from './components/Main';
import CardList from "./components/CardList";
import img from './images/Thar_Peak.jpg';

const GridContainer = styled("div")`
display: grid;
height: 100vh;
grid-template-rows: 1fr 1fr ${size.footerHeight};
grid-template-areas: "main main main"
                     "main main main"
                     "footer footer footer";                     
background: url(${img}) no-repeat center center fixed;
background-size: cover;
margin: 0;
padding: 0;
`
function App() {
  return (
    <GridContainer>
      <Main />
      <CardList />
    </GridContainer >
  );
}

export default App;
