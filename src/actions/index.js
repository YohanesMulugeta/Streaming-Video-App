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

export const signIn = (res) => {
  return { type: SIGN_IN, payload: res };
};

export const signOut = () => {
  return { type: SIGN_OUT, payload: {} };
};

// ---------------------------------------------------------------------------- CREATE
export const createStream = (formValues) => async (dispach) => {
  const { data } = await streams.post("/streams", formValues);

  dispach({ type: CREATE_STREAM, payload: data });
};

// ---------------------------------------------------------------------------- FETCH-SINGLE
export const fetchStream = (id) => async (dispach) => {
  const { data } = await streams.get(`/streams:${id}`);

  dispach({ type: FETCH_STREAM, payload: data });
};

// ---------------------------------------------------------------------------- FETCH MULTIPLE
export const fetchStreams = () => async (dispach) => {
  const { data } = await streams.get("/streams");

  dispach({ type: FETCH_STREAMS, payload: data });
};

// ---------------------------------------------------------------------------- EDIT
export const editStream = (id) => async (dispach) => {
  const { data } = await streams.post(`/streams:${id}`);

  dispach({ type: EDIT_STREAM, payload: data });
};

// ---------------------------------------------------------------------------- DELETE
export const deleteStream = (id) => async (dispach) => {
  const { data } = await streams(`/streams:${id}`);

  dispach({ type: CREATE_STREAM, payload: data });
};
