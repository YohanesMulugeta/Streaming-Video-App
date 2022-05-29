import { SIGN_IN, SIGN_OUT } from "./types";

export const signIn = (res) => {
  return { type: SIGN_IN, payload: res };
};

export const signOut = () => {
  return { type: SIGN_OUT, payload: {} };
};
