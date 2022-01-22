import { GET_TOKEN_SUCCESS, ADD_TOKEN_SUCCESS } from "./actionTypes";

const init = { token: "", isLogin: false };

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case ADD_TOKEN_SUCCESS:
      console.log(payload, "token", state);
      return {
        ...state,
        token: payload,
        isLogin: true,
      };
    case GET_TOKEN_SUCCESS:
      return {
        state,
      };
    default:
      return state;
  }
};
