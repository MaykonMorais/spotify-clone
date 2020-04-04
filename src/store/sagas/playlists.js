import api from "../../services/api";

/**
 * call: resultado de promises de chamadas assíncronas à api
 * put: enviar alguma informação para o reducer
 */
import { call, put } from "redux-saga/effects";

import { Creators as PlaylistsActions } from "../ducks/playlists";

export function* getPlaylists() {
  try {
    const response = yield call(api.get, "/playlists");

    yield put(PlaylistsActions.getPlaylistSucess(response.data));
  } catch (err) {
    console.log(err);
  }
}
