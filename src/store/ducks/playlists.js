// types, reducers e action creators
export const Types = {
  GET_REQUEST: "playlists/GET_REQUEST",
  GET_SUCCESS: "playlists/GET_SUCCESS",
};

const INITIAL_STATE = {
  data: [],
  loading: false,
};

//reducer(state, action)
export default function playlists(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    default:
      return state;
  }
}

// actions creators
/**
 * Actions que serão acionadas pelo components
 */
export const Creators = {
  getPlaylistRequest: () => ({
    type: Types.GET_REQUEST,
  }),
  getPlaylistSucess: (data) => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),
};
