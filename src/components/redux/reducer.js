import {
  GET_TOKEN_SUCCESS,
  ADD_TOKEN_SUCCESS,
  ADD_TRACK_SUCCESS,
} from "./actionTypes";

const init = { token: "", isLogin: false, track: "" };

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case ADD_TOKEN_SUCCESS:
      return {
        ...state,
        token: payload,
        isLogin: true,
      };
    case ADD_TRACK_SUCCESS:
      return {
        ...state,
        track: payload,
      };
    case GET_TOKEN_SUCCESS:
      return {
        state,
      };
    default:
      return state;
  }
};
