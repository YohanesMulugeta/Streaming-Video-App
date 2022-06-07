import React from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";

const ModalComponent = (props) => {
  const navigate = useNavigate();

  const hider = () => {
    document.querySelector(".modals").classList.remove("active");
    navigate("/");
  };

  //  --------------------------------------------- render
  return (
    <div onClick={props.onDismiss} className="ui dimmer modals active visible">
      <div
        //   --------------------------------------------------------------------- STOPING the EVENT PROPAGATION
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">{props.title}</div>

        <div className="content">{props.content}</div>

        <div
          className="actions"
          onClick={(e) => {
            //  ----------------------------------------------------------- GUARD key
            if (!e.target.closest(".button")) return;
            hider();
          }}
        >
          {props.actions}
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------------------------- USING PORTAL
const Modal = (props) => {
  return createPortal(
    <ModalComponent {...props} />,
    document.getElementById("modal")
  );
};

export default Modal;
