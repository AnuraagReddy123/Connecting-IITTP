import React, { useState } from "react";
import "./sell.css";
import axios from 'axios';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/* TO-DO
    1. show number of characters entered.
    2. check if mobile number is correctly entered : Done
*/

const port = process.env.PORT || 4000;
let url = 'http://localhost:';
if (process.env.NODE_ENV === 'production')
  url = 'https://save-environment-iittp.herokuapp.com';
else url = `http://localhost:${port}`;

toast.configure();

function Sell() {
  const initialSellItem = {
    title: "",
    category: "",
    description: "",
    price: "",
    address: "",
    mobileNumber: "",
  };

  const [sellItem, setSellItem] = useState(initialSellItem);
  const [validity, setValidity] = useState(initialSellItem);
  const history = useHistory();

  const handleChange = (e) => {
    const { value, name } = e.target;
    const newSellItem = JSON.parse(JSON.stringify(sellItem));
    if(name == "price" || name == "mobileNumber")
      newSellItem[name] = value.toString(10);
    else
      newSellItem[name] = value;

    setSellItem(newSellItem);
    
  }

  const handlePost = (e) => {
    // console.log(sellItem);
    const newValidity = {
      title: "",
      category: "",
      description: "",
      price: "",
      address: "",
      mobileNumber: "",
    };
    let flag=0;
    if(sellItem.category.length == 0){
      newValidity["category"] = " is-invalid";
      flag=1;
    }
    if(sellItem.title.length == 0){
      newValidity["title"] = " is-invalid";
      flag=1;
    }
    if(sellItem.description.length == 0){
      newValidity["description"] = " is-invalid";
      flag=1;
    }
    if(sellItem.price.length == 0){
      newValidity["price"] = " is-invalid";
      flag=1;
    }
    if(sellItem.address.length == 0 || sellItem.mobileNumber.indexOf('-') > -1){
      newValidity["address"] = " is-invalid";
      flag=1;
    }
    if(sellItem.mobileNumber.length != 10 || sellItem.mobileNumber.indexOf('e') > -1 || sellItem.mobileNumber.indexOf('.') > -1 || sellItem.mobileNumber.indexOf('+') > -1 || sellItem.mobileNumber.indexOf('-') > -1){
      newValidity["mobileNumber"] = " is-invalid";
      flag=1;
    }
    setValidity(newValidity);

    if(flag == 0){
      axios.post(`${url}/buyItems`, sellItem)
      .then(() => {
        history.push("/sell");
        setSellItem(initialSellItem);
        toast('Your Add is added to Buy page...');
      })
      .catch(error => console.log(error));
    }
    
  }

  return (
    <div className="container-fluid sellPage">
      <div className="row">
        <div className="col-md-6 postAdd">
          <div className="card postAddContent">
            <h4 className="heading">POST YOUR ADD</h4>
        
            <label for="category" className="form-label labels">
              Select Category
            </label>
            <select 
              className={"form-select categorySelection" + validity["category"]}
              name="category"
              onChange={handleChange}
              required
              >
              <option selected disabled></option>
              <option value="electronics">Electronics</option>
              <option value="furniture">Furniture</option>
              <option value="books_sports_hobbies">books Sports & Hobbies</option>
              <option value="cars_bikes">Cars & Bikes</option>
              <option value="fashion">Fashion</option>
              <option value="kids_toys">Kids & Toys</option>
            </select>

            <label for="titleOfAdd" className="form-label labels">
              Title
            </label>
            <input
              type="text"
              className={"form-control" + validity["title"]}
              placeholder="Mention key features of your item"
              name="title"
              onChange={handleChange}
              value={sellItem.title}
              maxLength="70"
              required
            ></input>

            <label for="addDetails" className="form-label labels">
              Description
            </label>
            <textarea
              className={"form-control" + validity["description"]}
              placeholder="Describe your item"
              name="description"
              onChange={handleChange}
              value={sellItem.description}
              rows="3"
              maxLength="5000"
              required
            ></textarea>

            <label for="price" className="form-label labels">
              Price
            </label>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                &#x20B9;
              </span>
              <input
                type="number"
                className={"form-control" + validity["price"]}
                placeholder="Set the price of your item"
                name="price"
                onChange={handleChange}
                value={sellItem.price}
                aria-label=""
                aria-describedby="basic-addon1"
                required
              />
            </div>

            <label for="mobileNumber" className="form-label labels">
              Mobile Number
            </label>
            <input
              type="number"
              className={"form-control" + validity["mobileNumber"]}
              placeholder="Enter your mobile Number"
              name="mobileNumber"
              onChange={handleChange}
              value={sellItem.mobileNumber}
              required
            ></input>

            <label for="address" className="form-label labels">
              Address
            </label>
            <textarea
              className={"form-control" + validity["address"]}
              placeholder="Mention your address"
              name="address"
              onChange={handleChange}
              value={sellItem.address}
              rows="3"
              maxLength="5000"
              required
            ></textarea>

            <button type="button" className="btn btn-primary postBtn" onClick={handlePost}>
              POST
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sell;
