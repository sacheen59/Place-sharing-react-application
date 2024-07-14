import React from "react";
import ReactDOM from "react-dom";

const SideDrawer = (props) => {
  const content = (
    <aside
      className="fixed h-full w-[15rem] py-[1rem] px-4 top-0 right-0 bg-red-400 md:hidden z-50"
      onClick={props.onClick}
    >
      {props.children}
    </aside>
  );
  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};

export default SideDrawer;
