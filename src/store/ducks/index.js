/**
 * Combinará todos os reducers
 */

// juntar todos os reducers
import { combineReducers } from "redux";
import playlists from "./playlists";

export default combineReducers({
  playlists,
});
