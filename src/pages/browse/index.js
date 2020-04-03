import React from "react";

import { Container, Title, List, Playlist } from "./styles.js";

const Browse = () => (
  <Container>
    <Title>Navegar</Title>

    <List>
      <Playlist to="/playlist/1">
        <img
          src="https://d3pbkubkud8ly4.cloudfront.net/images/medium/1105_Lo-Fi_Nights_800.jpg?1561474974"
          alt="Lofi Playlist"
        />
        <strong>Lofi Hip-Hop</strong>
        <p>Relaxe enquanto você ouve Lofi hip-hop</p>
      </Playlist>
      <Playlist to="/playlist/1">
        <img
          src="https://d3pbkubkud8ly4.cloudfront.net/images/medium/1105_Lo-Fi_Nights_800.jpg?1561474974"
          alt="Lofi Playlist"
        />
        <strong>Lofi Hip-Hop</strong>
        <p>Relaxe enquanto você ouve Lofi hip-hop</p>
      </Playlist>
      <Playlist to="/playlist/1">
        <img
          src="https://d3pbkubkud8ly4.cloudfront.net/images/medium/1105_Lo-Fi_Nights_800.jpg?1561474974"
          alt="Lofi Playlist"
        />
        <strong>Lofi Hip-Hop</strong>
        <p>Relaxe enquanto você ouve Lofi hip-hop</p>
      </Playlist>
      <Playlist to="/playlist/1">
        <img
          src="https://d3pbkubkud8ly4.cloudfront.net/images/medium/1105_Lo-Fi_Nights_800.jpg?1561474974"
          alt="Lofi Playlist"
        />
        <strong>Lofi Hip-Hop</strong>
        <p>Relaxe enquanto você ouve Lofi hip-hop</p>
      </Playlist>
    </List>
  </Container>
);

export default Browse;
