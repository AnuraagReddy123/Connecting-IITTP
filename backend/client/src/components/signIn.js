
/*
  This component is used for user sign in by taking required inputs from the user along with google authentication.
*/

import React, { useState } from "react";
import { useHistory } from "react-router";
import "./signIn.css";
import { signInWithGoogle } from "./utils/auth";

function SignIn(props) {

  const history = useHistory();

  return (
    <div>
      <div className="signInField">
        <label for="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          className={"form-control" + props.validity["username"]}
          id="signInUsername"
          name="username"
          onChange={props.handleChange}
          value={props.userData.username}
          required
        ></input>
        <div className="invalid-feedback">Please enter valid username!</div>
      </div>

      <div className="signInField">
        <label for="password" className="form-label">
          Password
        </label>
        <input
          type="Password"
          className={"form-control" + props.validity["password"]}
          id="signInPassword"
          name="password"
          onChange={props.handleChange}
          value={props.userData.password}
          required
        ></input>
        <div className="invalid-feedback">Please enter Password!</div>
      </div>

      <div className="signInButton">
        <button
          onClick={props.handleSubmit}
          type="submit"
          className="btn btn-secondary"
          name="signInBtn"
        >
          Login
        </button>
        <button
          onClick={() => signInWithGoogle(history)}
          type="submit"
          className="btn btn-secondary signInG"
        >
        Log In with Google
        </button>
      </div>
    </div>
  );
}

export default SignIn;
