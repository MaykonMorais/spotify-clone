import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PlaylistsActions } from "../../store/ducks/playlists";

import { Container, Title, List, Playlist } from "./styles.js";

class Browse extends Component {
  componentDidMount() {
    this.props.getPlaylistRequest();
  }

  render() {
    return (
      <Container>
        <Title>Navegar</Title>

        <List>
          {this.props.playlists.data.map((playlist) => (
            <Playlist key={playlist.key}>
              <img src={playlist.thumbnail} alt={playlist.title} />
              <strong>{playlist.title}</strong>
              <p>{playlist.description}</p>
            </Playlist>
          ))}
        </List>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  playlists: state.playlists,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(PlaylistsActions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Browse);
