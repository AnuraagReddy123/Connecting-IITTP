import React, { Component } from "react";

/* TO-DO
  1. checking if given mobile number is valid or not
*/

class Login extends Component {
  state = {
    tabs: ["active", ""],
    signInOrUP: ["", ""],   // to disable firstName and lastName in the sign in section
    btn: ["", "none"],
    validity: {             // to store status of the input i.e valid or invalid
      firstName: "",
      lastName: "",
      mobileNumber: "",
      password: "",
    },
    firstName: "",          // to store the input
    lastName: "",
    mobileNumber: "",
    password: "",
  };

  handleTab = (tab) => {    // for signIn and signUp tabs
    const validity = {
      firstName: "",
      lastName: "",
      mobileNumber: "",
      password: "",
    };
    if (tab === 0) {
      this.setState({       // re-initializing to default values
        tabs: ["active", ""],
        signInOrUP: ["", ""],
        btn: ["", "none"],
        firstName: "",
        lastName: "",
        mobileNumber: "",
        password: "",
        validity: validity
      });
    } else {
      this.setState({
        tabs: ["", "active"],
        signInOrUP: ["none", "none"],
        btn: ["none", ""],
        firstName: "",
        lastName: "",
        mobileNumber: "",
        password: "",
        validity: validity
      });
    }
  };

  handleChange = (e) => {
    const { value, name } = e.target;             
    const validity = JSON.parse(JSON.stringify(this.state.validity));

    if (name === "mobileNumber") {
      if (value === "") validity["mobileNumber"] = " is-invalid";
      else validity["mobileNumber"] = " is-valid";
    }
    if (name === "firstName") {
      if (value === "") validity["firstName"] = " is-invalid";
      else validity["firstName"] = " is-valid";
    }
    if (name === "lastName") {
      if (value === "") validity["lastName"] = " is-invalid";
      else validity["lastName"] = " is-valid";
    }
    if (name === "password") {
      if (value === "") validity["password"] = " is-invalid";
      else validity["password"] = " is-valid";
    }

    this.setState({ validity });
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    if (
      (this.state.tabs[0] === "active" && (this.state.mobileNumber === "" || this.state.firstName === "" || this.state.lastName === "" || this.state.password === "")) || 
        (this.state.tabs[1] === "active" && (this.state.mobileNumber === "" || this.state.password === ""))
    )
    e.preventDefault();
    const validity = JSON.parse(JSON.stringify(this.state.validity));

    if (this.state.mobileNumber === "")
      validity["mobileNumber"] = " is-invalid";
    else validity["mobileNumber"] = " is-valid";

    if (this.state.firstName === "") validity["firstName"] = " is-invalid";
    else validity["firstName"] = " is-valid";

    if (this.state.lastName === "") validity["lastName"] = " is-invalid";
    else validity["lastName"] = " is-valid";

    if (this.state.password === "") validity["password"] = " is-invalid";
    else validity["password"] = " is-valid";

    this.setState({ validity });
  };

  render() {
    return (
        <div
          className="card shadow p-3 mb-5 bg-white rounded"
          style={{
            width: "25%",
            marginTop: "5%",
            marginLeft: "38%",
            backgroundColor: "lightgray",
          }}
        >
          <div className="card-header">
            <ul
              className="nav nav-tabs card-header-tabs"
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <li className="nav-item">
                <a
                  className={"nav-link " + this.state.tabs[0]}
                  href="#"
                  onClick={() => {
                    this.handleTab(0);
                  }}
                >
                  Sign Up
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={"nav-link " + this.state.tabs[1]}
                  href="#"
                  onClick={() => {
                    this.handleTab(1);
                  }}
                >
                  Sign In
                </a>
              </li>
            </ul>
          </div>

          <form onSubmit={this.handleSubmit}>
            <div
              style={{
                marginLeft: "5%",
                marginRight: "5%",
                marginTop: "3%",
                display: this.state.signInOrUP[0],
              }}
            >
              <label for="firstName" className="form-label">
                First name
              </label>
              <input
                type="text"
                className={"form-control" + this.state.validity["firstName"]}
                id="SignUpInput1"
                name="firstName"
                onChange={this.handleChange}
                value={this.state.firstName}
                required
              ></input>
              <div className="invalid-feedback">Please enter yout First name!</div>
            </div>

            <div
              style={{
                marginLeft: "5%",
                marginRight: "5%",
                marginTop: "3%",
                display: this.state.signInOrUP[1],
              }}
            >
              <label for="lastName" className="form-label">
                Last name
              </label>
              <input
                type="text"
                className={"form-control" + this.state.validity["lastName"]}
                id="SignUpInput2"
                onChange={this.handleChange}
                name="lastName"
                value={this.state.lastName}
                required
              ></input>
              <div className="invalid-feedback">Please enter your Last name!</div>
            </div>

            <div
              style={{ marginLeft: "5%", marginRight: "5%", marginTop: "3%" }}
            >
              <label for="mobileNumber" className="form-label">
                Mobile Number
              </label>
              <input
                type="number"
                className={"form-control" + this.state.validity["mobileNumber"]}
                id="validationCustom01"
                name="mobileNumber"
                onChange={this.handleChange}
                value={this.state.mobileNumber}
                required
              ></input>
              <div className="invalid-feedback">Please enter valid Email!</div>
            </div>

            <div
              style={{ marginLeft: "5%", marginRight: "5%", marginTop: "3%" }}
            >
              <label for="password" className="form-label">
                Password
              </label>
              <input
                type="Password"
                className={"form-control" + this.state.validity["password"]}
                id="exampleFormControlInput4"
                name="password"
                onChange={this.handleChange}
                value={this.state.password}
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
                onClick={this.handleSubmit}
                role="button"
                type="submit"
                className="btn btn-secondary"
                style={{ display: this.state.btn[0] }}
              >
                Create Account
              </button>

              <button
                onClick={this.handleSubmit}
                role="button"
                type="submit"
                className="btn btn-secondary"
                style={{ display: this.state.btn[1] }}
              >
                Login
              </button>
            </div>
          </form>
        </div>
    );
  }
}

export default Login;