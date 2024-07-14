import React from "react";
import ReactDOM from "react-dom";

const BackDrop = (props) => {
  const content = (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-40"
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
  return ReactDOM.createPortal(
    content,
    document.getElementById("backdrop-hook")
  );
};

export default BackDrop;
