import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  EDIT_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  DELETE_STREAM,
} from "./types";

import streams from "../api/streams";

const USER_ID_TEST = 23455433455677;

//-------------------------------------------------------------------------- Sign-In
export const signIn = () => {
  return { type: SIGN_IN, payload: USER_ID_TEST };
};

// ------------------------------------------------------------------------- Sign-Out
export const signOut = () => {
  return { type: SIGN_OUT, payload: null };
};

// ---------------------------------------------------------------------------- CREATE
export const createStream =
  (formValues, navigate) => async (dispach, getState) => {
    const { userId } = getState().auth;

    const { data } = await streams.post("/streams", { ...formValues, userId });

    dispach({ type: CREATE_STREAM, payload: data });

    navigate("/");
  };

// ---------------------------------------------------------------------------- FETCH MULTIPLE
export const fetchStreams = () => async (dispach) => {
  const { data } = await streams.get("/streams");

  dispach({ type: FETCH_STREAMS, payload: data });
};

// ---------------------------------------------------------------------------- FETCH-SINGLE
export const fetchStream = (id) => async (dispach) => {
  const { data } = await streams.get(`/streams/${id}`);

  dispach({ type: FETCH_STREAM, payload: data });
};

// ---------------------------------------------------------------------------- EDIT
export const editStream = (id, updateValue, navigate) => async (dispach) => {
  console.log(updateValue);
  const { data } = await streams.patch(`/streams/${id}`, updateValue);

  dispach({ type: EDIT_STREAM, payload: data });

  navigate("/");
};

// ---------------------------------------------------------------------------- DELETE
export const deleteStream = (id, navigate) => async (dispach) => {
  await streams.delete(`/streams/${id}`);

  dispach({ type: DELETE_STREAM, payload: id });
  navigate("/");
};
