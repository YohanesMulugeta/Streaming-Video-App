import React from "react";
import Modal from "../Modal";
import { useNavigate } from "react-router-dom";

const StreamDelete = () => {
  const navigate = useNavigate();

  const clickHandler = () => {};

  const actions = (
    // ------------------------------ REACT.FRAGMENT
    <>
      <button className="ui button negative">Delete</button>
      <button className="ui button">Cancel</button>
    </>
  );

  return (
    <div>
      <Modal
        title="Delete Stream"
        content="Are You Sure"
        actions={actions}
        onDismiss={() => {
          navigate("/");
        }}
      />
    </div>
  );
};

export default StreamDelete;
