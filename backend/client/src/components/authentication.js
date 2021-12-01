import React, { useState } from "react";
import SignIn from "./signIn";
import SignUp from "./signUp";
import "./authentication.css"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "@firebase/auth";
import { auth } from "./firebase/firebase";
import { useHistory } from "react-router";
import axios from "axios";

const port = process.env.PORT || 4000;
let url = 'http://localhost:';
if (process.env.NODE_ENV === 'production')
  url = 'https://save-environment-iittp.herokuapp.com';
else url = `http://localhost:${port}`;

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

  const signUpWithEmail = async (e) => {
    e.preventDefault();
    const promise = await signOut(auth);
    //sign up
    const user = {
      username: userData.username,
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.emailId,
      password: userData.password,
    }
    // registration
    try {
      const response = await axios.post(`${url}/register`,user);
      console.log(response);
      try {
        // register the account on firebase
        const response = await createUserWithEmailAndPassword(auth,userData.emailId,userData.password);
        console.log(response);
        history.push("/");
      }
      catch(error){
        console.log(error);
      }
    }
    catch (error) {
      alert(error.response.data.errors[0].msg);
    }
  };

  const logInWithUsername = async (e) => {
    e.preventDefault();
    const promise = await signOut(auth);
    // check if user with given username exists
    const response = await axios.get(`${url}/findUsername`,{params: {username: userData.username}});
    if(response.data) {
      const user = response.data;
      console.log(user);
      // compare passwords
      if(user.password === userData.password) {
        //credentials are valid, sign in the user
        const user_credential = await signInWithEmailAndPassword(auth,user.email,user.password);
        history.push("/");
      }
      else{
        alert('Invalid password');
      }
    }
    else{
      alert('Invalid username');
    }
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
        signUpWithEmail(e);
    }
    else{
        logInWithUsername(e);
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
