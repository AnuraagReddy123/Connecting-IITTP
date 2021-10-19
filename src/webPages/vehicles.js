import React, { useState } from "react";
import "./vehicles.css";

function Vehicle(props) {
  const [vehicleType, setVehicleType] = useState("bike");
  const [validity, setValidity] = useState("");
  const [distance, setDistance] = useState();
  const [amount, setAmount] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "vehicleType") {
      setVehicleType(value);
    } else {
      if (value === "") setValidity(" is-invalid");
      else setValidity("");
      setDistance(value);
    }
  };

  const handleSubmit = (e) => {
    if (validity === " is-invalid") e.preventDefault();

    if (distance == "") setValidity(" is-invalid");
    else {
        setValidity("");
        let d = parseFloat(distance);
        if(vehicleType === "bike")
            setAmount("Amount of money you can save by walking or cycling is "+d*9+" Rs.")
        else
            setAmount("Amount of money you can save by walking or cycling is "+d*6+" Rs.")
    }


  };

  return (
    <div>
      <nav className="navbar navbar-light vehicleNavbar">
        <div className="container-fluid">
          <span className="subCategoryName">Vehicles</span>
        </div>
      </nav>

      <div className="container-fluid vehicleContainer">
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <div className="card shadow calculations">
                <div className="card-body">
                  <div className="mb-3 mt-3">
                    <label for="distance" className="form-label">
                      Distance
                    </label>
                    <input
                      type="number"
                      className={"form-control" + validity}
                      id="vehicleDistance"
                      name="distance"
                      onChange={handleChange}
                      value={distance}
                      required
                      placeholder="Enter the distance you are going to travel in Kilometers Km"
                    />
                    <div className="invalid-feedback">
                      Please enter valid distance!
                    </div>
                  </div>
                  <div className="mb-3">
                    <label for="typeOfVehicle" className="form-label">
                      Vehicle Type
                    </label>
                    <select
                      className="form-select"
                      name="vehicleType"
                      onChange={handleChange}
                      value={vehicleType}
                      required
                      aria-label="Default select example"
                    >
                      <option selected value="bike">Bike</option>
                      <option value="car">Car</option>
                    </select>
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary calculateBtn"
                    onClick={handleSubmit}
                  >
                    Calculate
                  </button>
                  <p className="mb-2">
                    {amount}
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="card shadow tips">
                <div className="card-body">
                  <h5>Tips</h5>
                  <hr></hr>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card shadow rounded impacts">
              <div className="card-body">
                <h5>Impacts</h5>
                <hr></hr>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vehicle;
