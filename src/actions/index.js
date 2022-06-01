import { SIGN_IN, SIGN_OUT } from "./types";

import streams from "../api/streams";

export const signIn = (res) => {
  return { type: SIGN_IN, payload: res };
};

export const signOut = () => {
  return { type: SIGN_OUT, payload: {} };
};

export const createStream = (formValues) => async (dispach) => {
  streams.post("/streams", formValues);
  console.log(formValues);
};
