import {
  GET_TOKEN_SUCCESS,
  ADD_TOKEN_SUCCESS,
  ADD_TRACK_SUCCESS,
} from "./actionTypes";

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

export const addTrackSuccess = (data) => {
  return {
    type: ADD_TRACK_SUCCESS,
    payload: data,
  };
};
