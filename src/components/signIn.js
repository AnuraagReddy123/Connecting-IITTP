import React, { useState } from "react";

function SignIn(props) {
  return (
    <div>
      <div style={{ marginLeft: "5%", marginRight: "5%", marginTop: "3%" }}>
        <label for="mobileNumber" className="form-label">
          Mobile Number
        </label>
        <input
          type="number"
          className={"form-control" + props.validity["mobileNumber"]}
          id="validationCustom01"
          name="mobileNumber"
          onChange={props.handleChange}
          value={props.userData.mobileNumber}
          required
        ></input>
        <div className="invalid-feedback">
          Please enter valid Mobile Number!
        </div>
      </div>

      <div style={{ marginLeft: "5%", marginRight: "5%", marginTop: "3%" }}>
        <label for="password" className="form-label">
          Password
        </label>
        <input
          type="Password"
          className={"form-control" + props.validity["password"]}
          id="exampleFormControlInput4"
          name="password"
          onChange={props.handleChange}
          value={props.userData.password}
          required
        ></input>
        <div className="invalid-feedback">Please enter Password!</div>
      </div>

      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          marginTop: "3%",
        }}
      >
        <button
          onClick={props.handleSubmit}
          role="button"
          type="submit"
          className="btn btn-secondary"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default SignIn;
