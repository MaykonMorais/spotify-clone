import React from "react";

import ClockIcon from "../../assets/images/clock.svg";
import PlusIcon from "../../assets/images/plus.svg";

import { Container, Header, SongList } from "./styles";

console.tron.log("teste");

const Playlist = () => (
  <Container>
    <Header>
      <img
        src="https://d3pbkubkud8ly4.cloudfront.net/images/medium/1105_Lo-Fi_Nights_800.jpg?1561474974"
        alt="Lofi Playlist"
      />
      <div>
        <span>PLAYLIST</span>
        <h1>Lofi Hip-Hop</h1>
        <p>10 músicas</p>

        <button>PLAY</button>
      </div>
    </Header>
    <SongList cellPadding={0} cellSpacing={0}>
      <thead>
        <th />
        <th>Título</th>
        <th>Artísta</th>
        <th>Álbum</th>
        <th>
          <img src={ClockIcon} alt="Duração" />
        </th>
      </thead>
      <tbody>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar Playlist" />
          </td>
          <td>Summer</td>
          <td>Jonny Juice</td>
          <td>The Breakfest</td>
          <td>3:20</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar Playlist" />
          </td>
          <td>Summer</td>
          <td>Jonny Juice</td>
          <td>The Breakfest</td>
          <td>3:20</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar Playlist" />
          </td>
          <td>Summer</td>
          <td>Jonny Juice</td>
          <td>The Breakfest</td>
          <td>3:20</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar Playlist" />
          </td>
          <td>Summer</td>
          <td>Jonny Juice</td>
          <td>The Breakfest</td>
          <td>3:20</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar Playlist" />
          </td>
          <td>Summer</td>
          <td>Jonny Juice</td>
          <td>The Breakfest</td>
          <td>3:20</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar Playlist" />
          </td>
          <td>Summer</td>
          <td>Jonny Juice</td>
          <td>The Breakfest</td>
          <td>3:20</td>
        </tr>
      </tbody>
    </SongList>
  </Container>
);

export default Playlist;
