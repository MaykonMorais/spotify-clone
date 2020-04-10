import api from "../../services/api";

/**
 * call: resultado de promises de chamadas assíncronas à api
 * put: enviar alguma informação para o reducer
 */
import { call, put } from "redux-saga/effects";

import { Creators as PlaylistsActions } from "../ducks/playlists";
import { Creators as ErrorActions } from "../ducks/error";

export function* getPlaylists() {
  try {
    const response = yield call(api.get, "/playlists");

    yield put(PlaylistsActions.getPlaylistSucess(response.data));
  } catch (err) {
    yield put(ErrorActions.setError("Não foi possivel obter as playlists"));
  }
}
