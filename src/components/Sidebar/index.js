import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PlaylistsActions } from "../../store/ducks/playlists";
import Proptypes from "prop-types";

import { Container, NewPlaylist, Nav } from "./styles";
import AddPlaylistIcon from "../../assets/images/add_playlist.svg";

class Sidebar extends Component {
  static propTypes = {
    getPlaylistRequest: Proptypes.func.isRequired,
    playlists: Proptypes.shape({
      data: Proptypes.arrayOf(
        Proptypes.shape({
          id: Proptypes.number,
          title: Proptypes.string,
        })
      ),
    }).isRequired,
  };
  componentDidMount() {
    this.props.getPlaylistRequest();
  }
  render() {
    return (
      <Container>
        <div>
          <Nav main>
            <li>
              <Link to="/">Navegar</Link>
            </li>
            <li>
              <a href="/radio">Radio</a>
            </li>
          </Nav>
          <Nav>
            <li>
              <span>SUA BIBLIOTECA</span>
            </li>
            <li>
              <a href="/daily">Seu Daily Mix</a>
            </li>
            <li>
              <a href="/">Tocados Recentemente</a>
            </li>
            <li>
              <a href="/">Músicas</a>
            </li>
            <li>
              <a href="/">Albuns</a>
            </li>
            <li>
              <a href="/">Artistas</a>
            </li>
            <li>
              <a href="/">Estações</a>
            </li>
            <li>
              <a href="/">Arquivos Locais</a>
            </li>
            <li>
              <a href="/">Vídeos</a>
            </li>
            <li>
              <a href="/">Podcasts</a>
            </li>
          </Nav>
          <Nav>
            <li>
              <span>PLAYLISTS</span>
            </li>
            {this.props.playlists.data.map((playlist) => (
              <li key={playlist.id}>
                <Link to={`playlist/${playlist.id}`}>{playlist.title}</Link>
              </li>
            ))}
          </Nav>
        </div>

        <NewPlaylist>
          <img src={AddPlaylistIcon} alt="Adicionar playlist" />
          Nova Playlist
        </NewPlaylist>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  playlists: state.playlists,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(PlaylistsActions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
