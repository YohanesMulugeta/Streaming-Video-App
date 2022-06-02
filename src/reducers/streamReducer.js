import {
  DELETE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  CREATE_STREAM,
  EDIT_STREAM,
} from "../actions/types";

const streamReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_STREAMS:
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
    default:
      return state;
  }
};
