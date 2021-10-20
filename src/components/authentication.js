import React, { useState } from "react";
import SignIn from "./signIn";
import SignUp from "./signUp";
import "./authentication.css"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "./firebase";
import { useHistory } from "react-router";

function Authentication() {

  const history = useHistory();

  const initialStateOfUserData = {
    firstName: "",
    lastName: "",
    emailId: "",
    password: "",
    username: "",
  };

  const initialStateOfotherData = {
    tabs: ["active", ""],
    signInOrUP: ["", ""],
    btn: ["", "none"],
  };

  const initialStateOfValidity = {
    firstName: "",
    lastName: "",
    emailId: "",
    password: "",
    username: "",
  };

  const [userData, setUserData] = useState(initialStateOfUserData);
  const [otherData, setOtherData] = useState(initialStateOfotherData);
  const [validity, setValidity] = useState(initialStateOfValidity);

  const signUpWithEmail = () => {
    createUserWithEmailAndPassword(auth,userData.emailId,userData.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      //TODO: Store the user information in the database
     history.push("/"); // send the user to the home page
    })
    .catch((error) => {
      console.log(error)
    })
  };

  const logInWithEmail = () => {
    signInWithEmailAndPassword(auth,userData.emailId,userData.password)
    .then((_user) => {

      history.push("/"); // send the user to the home page after logging in
    })
    .catch((error) => console.log(error));
  };

  const handleTab = (tab) => {
    if (tab === 0) {
      setOtherData({
        tabs: ["active", ""],
        signInOrUP: ["", ""],
        btn: ["", "none"],
      });
    } else {
      setOtherData({
        tabs: ["", "active"],
        signInOrUP: ["none", "none"],
        btn: ["none", ""],
      });
    }
    setUserData(initialStateOfUserData);
    setValidity(initialStateOfValidity);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    const newValidity = JSON.parse(JSON.stringify(validity));

    if (name === "emailId") {
      if (value === "") newValidity["emailId"] = " is-invalid";
      else newValidity["emailId"] = " is-valid";
    }
    if (name === "firstName") {
      if (value === "") newValidity["firstName"] = " is-invalid";
      else newValidity["firstName"] = " is-valid";
    }
    if (name === "lastName") {
      if (value === "") newValidity["lastName"] = " is-invalid";
      else newValidity["lastName"] = " is-valid";
    }
    if (name === "password") {
      if (value === "") newValidity["password"] = " is-invalid";
      else newValidity["password"] = " is-valid";
    }
    if (name === "username") {
      if (value === "") newValidity["username"] = " is-invalid";
      else newValidity["username"] = " is-valid";
    }

    const newUserData = JSON.parse(JSON.stringify(userData));
    newUserData[name] = value;

    setValidity(newValidity);
    setUserData(newUserData);
  };

  const handleSubmit = (e) => {
    if (
      (otherData.tabs[0] === "active" &&
        (userData.emailId === "" ||
          userData.firstName === "" ||
          userData.lastName === "" ||
          userData.password === "" ||
          userData.username === "")) ||
      (otherData.tabs[1] === "active" &&
        (userData.username === "" || userData.password === ""))
    )
      e.preventDefault();
    const newValidity = JSON.parse(JSON.stringify(validity));

    if (userData.emailId === "") newValidity["emailId"] = " is-invalid";
    else newValidity["emailId"] = " is-valid";

    if (userData.firstName === "") newValidity["firstName"] = " is-invalid";
    else newValidity["firstName"] = " is-valid";

    if (userData.lastName === "") newValidity["lastName"] = " is-invalid";
    else newValidity["lastName"] = " is-valid";

    if (userData.password === "") newValidity["password"] = " is-invalid";
    else newValidity["password"] = " is-valid";

    if (userData.username === "") newValidity["username"] = " is-invalid";
    else newValidity["username"] = " is-valid";

    setValidity(newValidity);
    const {name} = e.target;
    if(name === "signUpBtn") {
        console.log("reaching here");
        // TODO: Check if the user already exists using the username and email
        signUpWithEmail();
    }
    else{
      // TODO: Check if the user exists else signIn is not possible
        logInWithEmail();
    }

  };

  let loginType;
  if (otherData.tabs[0] === "active") {
    loginType = (
      <SignUp
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        userData={userData}
        validity={validity}
      />
    );
  } else {
    loginType = (
      <SignIn
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        userData={userData}
        validity={validity}
      />
    );
  }

  return (
    <div className="card shadow p-3 mb-5 bg-white rounded authenticationCard">
      <div className="card-header">
        <ul className="nav nav-tabs card-header-tabs tabHeader">
          <li className="nav-item">
            <a
              className={"nav-link " + otherData.tabs[0]}
              href="#"
              onClick={() => { handleTab(0); }}
            >
              Sign Up
            </a>
          </li>

          <li className="nav-item">
            <a
              className={"nav-link " + otherData.tabs[1]}
              href="#"
              onClick={() => { handleTab(1); }}
            >
              Sign In
            </a>
          </li>
        </ul>
      </div>
      <form onSubmit={handleSubmit}>{loginType}</form>
    </div>
  );
}

export default Authentication;
