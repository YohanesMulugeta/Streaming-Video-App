import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import StreamForm from "../StreamForm";
import { fetchStream } from "../../actions";

const StreamEdit = () => {
  // this is the new React-router-dom V6 method of using params in the routes element
  // to use locatio we can also do like location = useLocaton()
  const { id } = useParams();
  const dispach = useDispatch();

  const selectStream = (state) => {
    return state.streams[id];
  };

  const data = useSelector(selectStream);

  useEffect(() => {
    if (!data) dispach(fetchStream(id));
  }, [dispach]);

  return (
    <StreamForm
      button="Update"
      labelTitle="Title"
      labelDescription="Description"
    />
  );
};

export default StreamEdit;
