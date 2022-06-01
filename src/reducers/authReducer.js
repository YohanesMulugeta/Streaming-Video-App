import { SIGN_IN, SIGN_OUT } from "../actions/types";

const INITIAL_STATE = {
  isSignedIn: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, tokenResponse: action.payload };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, tokenResponse: action.payload };

    default:
      return state;
  }
};

export default authReducer;
