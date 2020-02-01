import React from 'react';
import './App.css';
import styled from "@emotion/styled";
import size from "../src/styles/size";
import { Header } from "./components/Header";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import { Footer } from "./components/Footer";
// import { CurrentWeather } from './components/CurrentWeather';

const GridContainer = styled("div")`
display: grid;
height: 100vh;
grid-template-rows: ${size.headerHeight} 1fr ${size.footerHeight};
grid-template-columns: ${size.navBarWidth} 1fr;
grid-template-areas: "header header"
                     "nav main"
                     "footer footer";
`
function App() {
  return (
    <GridContainer>
      <Header />
      <NavBar />
      <Main />
      <Footer />
    </GridContainer>
  );
}

export default App;
