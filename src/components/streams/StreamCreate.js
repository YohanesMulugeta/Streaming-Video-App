import React from "react";
import { Field } from "redux-form";
import { useNavigate } from "react-router-dom";
import { createStream } from "../../actions";
import { useDispatch } from "react-redux";

import StreamForm from "../StreamForm";

const StreamCreate = (props) => {
  const navigate = useNavigate();

  // ------------------------------------------------- useDispatch hook to dispatch actions to our store
  const dispatch = useDispatch();

  const onSubmitClick = (formValues) => {
    dispatch(createStream(formValues, navigate));
  };

  return (
    <StreamForm
      onButtonClick={onSubmitClick}
      labelTitle="Enter Title"
      labelDescription="Enter Description"
      button="Submit"
    />
  );
};

export default StreamCreate;
