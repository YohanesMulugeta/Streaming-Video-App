import React from "react";
import { createPortal } from "react-dom";

const Mod = () => {
  return (
    <div className="ui dimmer modals active visible">
      <div className="ui standard modal visible active">I am the BEST</div>
    </div>
  );
};

const Modal = (props) => {
  return createPortal(<Mod />, document.getElementById("modal"));
};

export default Modal;
