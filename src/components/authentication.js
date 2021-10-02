import React, { useState } from "react";
import SignIn from "./signIn";
import SignUp from "./signUp";

function Authentication() {
  const initialStateOfUserData = {
    firstName: "",
    lastName: "",
    mobileNumber: "",
    password: "",
  };

  const initialStateOfotherData = {
    tabs: ["active", ""],
    signInOrUP: ["", ""],
    btn: ["", "none"],
  };

  const initialStateOfValidity = {
    firstName: "",
    lastName: "",
    mobileNumber: "",
    password: "",
  }

  const [userData, setUserData] = useState(initialStateOfUserData);
  const [otherData, setOtherData] = useState(initialStateOfotherData);
  const [validity, setValidity] = useState(initialStateOfValidity);

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
        btn: ["none", ""]
      });
    }
    setUserData(initialStateOfUserData);
    setValidity(initialStateOfValidity);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    const newValidity = JSON.parse(JSON.stringify(validity));

    if (name === "mobileNumber") {
      if (value === "") newValidity["mobileNumber"] = " is-invalid";
      else newValidity["mobileNumber"] = " is-valid";
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

    const newUserData = JSON.parse(JSON.stringify(userData));
    newUserData[name] = value;

    setValidity(newValidity);
    setUserData(newUserData);
  };

  const handleSubmit = (e) => {
    if (
      (otherData.tabs[0] === "active" &&
        (userData.mobileNumber === "" ||
          userData.firstName === "" ||
          userData.lastName === "" ||
          userData.password === "")) ||
      (otherData.tabs[1] === "active" &&
        (userData.mobileNumber === "" || userData.password === ""))
    )
      e.preventDefault();
    const newValidity = JSON.parse(JSON.stringify(validity));

    if (userData.mobileNumber === "")
      newValidity["mobileNumber"] = " is-invalid";
    else newValidity["mobileNumber"] = " is-valid";

    if (userData.firstName === "") newValidity["firstName"] = " is-invalid";
    else newValidity["firstName"] = " is-valid";

    if (userData.lastName === "") newValidity["lastName"] = " is-invalid";
    else newValidity["lastName"] = " is-valid";

    if (userData.password === "") newValidity["password"] = " is-invalid";
    else newValidity["password"] = " is-valid";

    setValidity(newValidity);
  };

  let loginType;
  if(otherData.tabs[0] === "active"){
    loginType = <SignUp handleChange={handleChange} handleSubmit={handleSubmit} userData={userData} validity={validity} />
  }
  else{
    loginType = <SignIn handleChange={handleChange} handleSubmit={handleSubmit} userData={userData} validity={validity} />
  }

  return (
    <div
      className="card shadow p-3 mb-5 bg-white rounded"
      style={{  width: "25%", marginTop: "5%", marginLeft: "38%", backgroundColor: "lightgray"}}
    >
      <div className="card-header">
        <ul
          className="nav nav-tabs card-header-tabs"
          style={{ alignItems: "center", justifyContent: "center", display: "flex"}}
        >

          <li className="nav-item">
            <a
              className={"nav-link " + otherData.tabs[0]} href="#"
              onClick={() => {handleTab(0);}}
            >
              Sign Up
            </a>
          </li>

          <li className="nav-item">
            <a
              className={"nav-link " + otherData.tabs[1]}
              href="#"
              onClick={() => {handleTab(1);}}
            >
              Sign In
            </a>
          </li>
          
        </ul>
      </div>

      <form onSubmit={handleSubmit}>
        {loginType}
      </form>
    </div>
  );
}

export default Authentication;
