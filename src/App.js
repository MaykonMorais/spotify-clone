import React, { Fragment } from "react";
import GlobalStyle from "./styles/global";

import { BrowserRouter } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Header from "./components/Header";

import { Wrapper, Container, Content } from "./styles/components";

import "./config/reactotron";

import Routes from "./routes/index";

const App = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <GlobalStyle />
        <Container>
          <Sidebar />
          <Content>
            <Header />
            <Routes />
          </Content>
        </Container>
        <Player />
      </Wrapper>
    </BrowserRouter>
  );
};
export default App;
