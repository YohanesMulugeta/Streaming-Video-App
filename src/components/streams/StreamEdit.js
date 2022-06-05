import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import StreamForm from "../StreamForm";
import { fetchStream } from "../../actions";
import { editStream } from "../../actions";

const StreamEdit = () => {
  // this is the new React-router-dom V6 method of using params in the routes element
  // to use locatio we can also do like location = useLocaton()
  const { id } = useParams();
  const dispatch = useDispatch();

  // ----------------------------------------------------------------- State Selector
  const selectStream = (state) => {
    return state.streams[id];
  };

  // ------------------------------------------------------------------ useSelector HOOK instead of mapStateToProps
  const stream = useSelector(selectStream);

  // ------------------------------------------------------------------ useEffect hook to dispatch  a fetch action if no stream has found
  useEffect(() => {
    if (!stream) dispatch(fetchStream(id));
  }, [dispatch]);

  const onUpdate = (formValues, id) => {
    dispatch(editStream(id, formValues));
  };

  return (
    <StreamForm
      button="Update"
      onButtonClick={onUpdate}
      labelTitle="Title"
      labelDescription="Description"
    />
  );
};

export default StreamEdit;
