import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Modal from "../Modal";
import { fetchStream, deleteStream } from "../../actions";

const StreamDelete = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const streamSelector = (state) => {
    return state.streams[id];
  };

  const stream = useSelector(streamSelector);

  useEffect(() => {
    // ---------------------------------- GUARD KEY
    if (stream) return;

    // ----------------------------------- Dispatching an action
    dispatch(fetchStream(id));
  }, [dispatch]);

  const actions = (
    // ------------------------------ REACT.FRAGMENT
    <>
      <button className="ui button negative">Delete</button>
      <button className="ui button">Cancel</button>
    </>
  );

  const renderContent = () => {
    return stream ? stream.title : "Loading";
  };

  return (
    <Modal
      title="Delete Stream"
      content={`Are You Sure to Delete "${renderContent()}" Stream`}
      actions={actions}
      onDismiss={() => {
        navigate("/");
      }}
    />
  );
};

export default StreamDelete;
