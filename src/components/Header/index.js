import React from "react";

import { Container, Search, User } from "./styles";
const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search"></input>
    </Search>
    <User>
      <img
        src="https://avatars1.githubusercontent.com/u/43121724?v=4"
        alt="Avatar"
      />
      Maykon Morais
    </User>
  </Container>
);

export default Header;
