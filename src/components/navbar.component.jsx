import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { auth } from "../firebase/firebase.utils";

import "./navbar.style.css";

const NavBar = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">
          <button type="button" onClick={() => auth.signOut()}>
            Sign out
          </button>
        </Link>
      </nav>
    </BrowserRouter>
  );
};

export default NavBar;
