import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import Navlinks from "./Navlinks";
import SideDrawer from "./SideDrawer";
import BackDrop from "../UIElements/BackDrop";

function MainHeader() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  function openDrawerHandler() {
    setIsDrawerOpen(true);
  }

  function closeDrawerHandler() {
    setIsDrawerOpen(false);
  }
  return (
    <>
      {isDrawerOpen && <BackDrop onClick={closeDrawerHandler} />}
      {isDrawerOpen && (
        <SideDrawer onClick={closeDrawerHandler}>
          <button onClick={closeDrawerHandler}>
            <i class="fa-solid fa-xmark text-primary text-3xl"></i>
          </button>
          <nav className="mt-[8rem]">
            <ul className="flex flex-col gap-4">
              <Navlinks />
            </ul>
          </nav>
        </SideDrawer>
      )}

      <header className="bg-secondary flex items-center p-4 justify-between w-full sticky top-0">
        <Link to={"/"}>
          <div className="bg-red-700 py-2 px-4 rounded-lg shadow-md">
            <h1 className="text-white text-1xl font-bold">SHARE PLACES</h1>
          </div>
        </Link>
        <nav className="hidden md:block">
          <ul className="list-none flex items-center gap-6">
            <Navlinks />
          </ul>
        </nav>
        <button className="block md:hidden" onClick={openDrawerHandler}>
          <i className="fa-solid fa-bars text-red-700 text-3xl"></i>
        </button>
      </header>
    </>
  );
}

export default MainHeader;
