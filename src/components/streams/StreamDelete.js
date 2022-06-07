import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Modal from "../Modal";
import { fetchStream, deleteStream } from "../../actions";

const StreamDelete = () => {
  // ------------------------------------------------------------------------------- INITIAL-CONFIGURATION
  const { id } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  // ------------------------------------------------------------------------------------- StreamSelector
  const streamSelector = (state) => {
    return state.streams[id];
  };
  // ---------------------------------------------------------------------------------------- USE-SELECTOR
  const stream = useSelector(streamSelector);

  // ------------------------------------------------------------------------------------- COMPONENT-DID-MOUNT
  useEffect(() => {
    // ------------------------------ GUARD KEY
    if (stream) return;

    // ---------------------------- Dispatching an action
    dispatch(fetchStream(id));
  }, [dispatch]);

  // --------------------------------------------------------------------------------------- ACTIONS
  const actions = (
    // ---------------------------- REACT.FRAGMENT
    <>
      <button
        onClick={() => {
          dispatch(deleteStream(id, navigate));
        }}
        className="ui button negative"
      >
        Delete
      </button>
      <Link to="/" className="ui button">
        Cancel
      </Link>
    </>
  );

  // -------------------------------------------------------------------------------------- content renderer
  const renderContent = () => {
    return stream ? stream.title : "Loading";
  };

  // ------------------------------------------------------------------------------------ RENDER
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
