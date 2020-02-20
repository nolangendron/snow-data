import React from 'react';
import './App.css';
import styled from "@emotion/styled";
import size from "../src/styles/size";
import Main from './components/Main';
import CardList from "./components/CardList";
import img from './images/Thar_Peak.jpg';



const Container = styled("div")`
margin: 0;
padding: 0;
background: url(${img}) no-repeat center center fixed;
background-size: cover;
`
function App() {
  return (
    <Container>
      <Main />
      <CardList />
    </Container >
  );
}

export default App;
