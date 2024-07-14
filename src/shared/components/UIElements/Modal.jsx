import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import BackDrop from "./BackDrop";

const ModalOverlay = (props) => {
  const modalClass =
    "max-w-[40rem] min-h-[10rem] md:min-h-[15rem] w-[90%] mx-auto fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-white z-50";
  const content = (
    <Card className={modalClass}>
      <header className="bg-red-700 text-white p-4 font-bold text-2xl">
        <h2>{props.header}</h2>
      </header>
      <hr />
      <form
        className="min-h-[90%] p-6"
        onSubmit={
          props.onSubmit ? props.onSubmit : (event) => event.preventDefault()
        }
      >
        <div>{props.children}</div>
      </form>
      <footer className="p-4">{props.footer}</footer>
    </Card>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

const Modal = (props) => {
  return (
    <>
      <BackDrop onClick={props.onClose} />

      <ModalOverlay {...props} />
    </>
  );
};

export default Modal;
