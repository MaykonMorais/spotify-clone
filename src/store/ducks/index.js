/**
 * Combinará todos os reducers
 */

// juntar todos os reducers
import { combineReducers } from "redux";
import playlists from "./playlists";
import playlistDetails from "./playlistDetails";
import player from "./player";
import error from "./error";

export default combineReducers({
  playlists,
  playlistDetails,
  player,
  error,
});
