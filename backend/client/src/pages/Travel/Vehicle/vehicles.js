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

    if (distance === "") setValidity(" is-invalid");
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
          <h4 className="subCategoryName">Vehicles</h4>
        </div>
      </nav>

      <div className="container-fluid vehicleContainer">
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <div className="card shadow calculations">
                <div className="card-body">
                  <div className="mb-3 mt-3">
                    <label for="distance" className="form-label vehicleContent">
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
                    <div className="invalid-feedback ">
                      Please enter valid distance!
                    </div>
                  </div>
                  <div className="mb-3">
                    <label for="typeOfVehicle" className="form-label vehicleContent">
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
                  <p className="mb-2 vehicleContent">
                    {amount}
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="card shadow tips">
                <div className="card-body">
                  <h4 style={{color: "green", fontFamily: "monospace"}}>Tips</h4>
                  <hr></hr>
                  <ul>
                    <li><p className="vehicleContent">Make sure the gas cap is on tight : One reason you may not be getting the mileage you expect is because there isn't as much gas in your tank as you think. 147 million gallons of gas were lost last year due to evaporation. Why did it evaporate? The gas cap was not on tight. So just make sure it is tight, and it will enable you to keep all the gas you pay for.</p></li>
                    <li><p className="vehicleContent">Avoid idling : When you do need to drive your car, make sure you avoid idling whenever possible. When your car is running, but not moving, your gas mileage is absolute zero. So if your car will remain stationary for more than a minute or so, switch the engine off. However, only do this when it is safe to do so.</p></li>
                    <li><p className="vehicleContent">Accelerate and break steadily : While driving, always apply steady and consistent pressure to your car's accelerator pedal. A heavy foot will always result in reduced gas mileage and poor fuel consumption.</p></li>
                    <li><p className="vehicleContent">Coast when possible : Constantly accelerating and braking only wastes fuel and reduces your car's fuel consumption. So, whenever possible, coast and avoid burning excess fuel. This takes a little practice, but can be a great way to increase the fuel economy of your vehicle.</p></li>
                    <li><p className="vehicleContent">Make your car more aerodynamic : You can do so by removing the roof racks on top of the car, and also by decreasing the weight of the car by taking out unneeded items.</p></li>
                </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card shadow rounded vehicleImpacts">
              <div className="card-body">
                <h4 style={{color: "red", fontFamily: "monospace"}}>Impacts</h4>
                <hr></hr>
                <ul>
                    <li><p className="vehicleContent">Fossil fuels emit harmful air pollutants long before they’re burned. Indeed, millions of people are exposed daily to toxic air pollution from active oil and gas wells and from transport and processing facilities.</p></li>
                    <li><p className="vehicleContent">When we burn oil, coal, and gas, we don’t just meet our energy needs—we drive the current global warming crisis as well.</p></li>
                    <li><p className="vehicleContent">Fossil fuels produce large quantities of carbon dioxide when burned. Carbon emissions trap heat in the atmosphere and lead to climate change.</p></li>
                    <li><p className="vehicleContent">Fossil fuels emit more than just carbon dioxide when burned. Coal-fired power plants singlehandedly emits large quantities of dangerous mercury.</p></li>
                    <li><p className="vehicleContent">When we burn oil, coal, and gas, we change the ocean’s basic chemistry, making it more acidic. Our seas absorb as much as a quarter of all man-made carbon emissions.</p></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vehicle;
