import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const StreamEdit = () => {
  // this is the new React-router-dom V6 method of using params in the routes element
  // to use locatio we can also do like location = useLocaton()
  const { id } = useParams();

  const selectStream = (state) => {
    return state.streams[id];
  };

  const data = useSelector(selectStream);

  console.log(data);

  return <div>StreamEdit</div>;
};

export default StreamEdit;
