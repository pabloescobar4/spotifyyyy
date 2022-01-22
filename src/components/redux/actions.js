import { GET_TOKEN_SUCCESS, ADD_TOKEN_SUCCESS } from "./actionTypes";

export const getTokenSuccess = () => {
  return {
    type: GET_TOKEN_SUCCESS,
  };
};

export const addTokenSuccess = (data) => {
  return {
    type: ADD_TOKEN_SUCCESS,
    payload: data,
  };
};
