import React from "react";

import { signInWithGoogle } from "../firebase/firebase.utils";
import { ReactComponent as GoogleIcon } from "../assets/google_icon.svg";
import "./signIn.style.css";

const SignIn = () => {
  return (
    <div className="flex-container">
      <h1>Schedule your day</h1>
      <div className="sign-in-container">
        <button onClick={signInWithGoogle} className="button">
          <div className="icon">
            <GoogleIcon />
          </div>
          <h5>Sign In With Google</h5>
        </button>
      </div>
    </div>
  );
};

export default SignIn;
