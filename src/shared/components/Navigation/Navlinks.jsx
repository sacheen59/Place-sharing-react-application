import React, { useContext } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

import { AuthContext } from "../../context/auth-context";

const Navlinks = () => {
  const auth = useContext(AuthContext);
  return (
    <>
      <li>
        <NavLink
          to="/"
          exact
          className="text-itemBackground font-bold hover:text-red-700"
          activeClassName="text-red-700"
        >
          ALL USERS
        </NavLink>
      </li>
      {auth.isLoggedIn && (
        <li>
          <NavLink
            to="/u1/places"
            exact
            className="text-itemBackground font-bold hover:text-red-700"
            activeClassName="text-red-700"
          >
            MY PLACES
          </NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink
            to="/places/new"
            exact
            className="text-itemBackground font-bold hover:text-red-700"
            activeClassName="text-red-700"
          >
            ADD PLACE
          </NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink
            to="/auth/login"
            exact
            className="text-itemBackground font-bold hover:text-red-700"
            activeClassName="text-red-700"
          >
            LOGIN
          </NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink
            to="/auth/signup"
            exact
            className="text-itemBackground font-bold hover:text-red-700"
            activeClassName="text-red-700"
          >
            SIGNUP
          </NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <button
            onClick={auth.logout}
            className=" border border-red-500 text-red-500 px-3 py-1 rounded-lg hover:bg-red-700  hover:text-white"
          >
            LOGOUT
          </button>
        </li>
      )}
    </>
  );
};

export default Navlinks;
