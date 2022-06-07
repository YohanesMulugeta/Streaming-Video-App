import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchStream } from "../../actions";

const StreamShow = () => {
  // ------------------------------------------------------------------------- initial CONFIGURATION
  const { id } = useParams();
  const dispatch = useDispatch();

  // ------------------------------------------------------------------------------- callBack for USE-SELECTOR
  const selectStream = (state) => {
    return state.streams[id];
  };

  const stream = useSelector(selectStream);

  // ------------------------------------------------------------------------------ USE-EFFECT
  useEffect(() => {
    if (stream) return;

    // ------------------------------------ DISPACHING A FETCH ACTION
    dispatch(fetchStream(id));
  }, [dispatch]);

  console.log(stream);

  return !stream ? (
    <div>'Loading...'</div>
  ) : (
    <div>
      <h1>{stream.title}</h1>
      <h5>{stream.description}</h5>
    </div>
  );
};

export default StreamShow;
