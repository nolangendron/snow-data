import React, { useState } from 'react';
import './App.css';
import styled from "@emotion/styled";
import Main from './components/Main';
import img from './images/Thar_Peak.jpg';
import { Burger } from './components/Burger/Burger';
import Menu from './components/Menu/Menu';

const Container = styled("div")`
margin: 0;
padding: 0;
background: url(${img}) no-repeat center center fixed;
background-size: cover;

@media only screen and (max-width: 600px) {
  background: none;
}

`
function App() {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
      <Main />
    </Container >
  );
}

export default App;
