import React from "react";
import "./sell.css";

/* TO-DO
    1. show number of characters entered.
    2. check if mobile number is correctly entered
*/

function Sell() {
  return (
    <div className="container-fluid sellPage">
      <div className="row">
        <div className="col-md-6 postAdd">
          <div className="card postAddContent">
            <h4 className="heading">POST YOUR ADD</h4>

            <label for="category" className="form-label labels">Select Category</label>  
            <select className="form-select categorySelection">
              <option selected disabled></option>
              <option value="1">Electronics</option>
              <option value="2">Furniture</option>
              <option value="3">books Sports & Hobbies</option>
              <option value="4">Cars & Bikes</option>
              <option value="5">Fashion</option>
              <option value="6">Kids & Toys</option>
            </select>

            <label for="titleOfAdd" className="form-label labels">Title</label>
            <input type="text" className="form-control" placeholder="Mention key features of your item" id="" maxLength="70" required></input>

            <label for="addDetails" className="form-label labels">Description</label>
            <textarea className="form-control" placeholder="Describe your item" id="" rows="3" maxLength="5000"></textarea>  

            <label for="price" className="form-label labels">Price</label>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">&#x20B9;</span>
                <input type="number" className="form-control" placeholder="Set the price of your item" aria-label="" aria-describedby="basic-addon1"/>
            </div>

            <label for="mobileNumber" className="form-label labels">Mobile Number</label>
            <input type="number" className="form-control" placeholder="Enter your mobile Number" id="" required></input>

            <label for="address" className="form-label labels">Address</label>
            <textarea className="form-control" placeholder="Mention your address" id="" rows="3" maxLength="5000"></textarea>  

            <button type="button" className="btn btn-primary postBtn">POST</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sell;
