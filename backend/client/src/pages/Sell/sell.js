//user can post an ad for selling his/her item and specifies its category, title and can add description,
// photos and price of the item. User can provide his/her address and mobile number for contact
import React, { useState, useEffect, useContext } from "react";
import "./sell.css";
import buyImage from "./defaultImage.PNG"
import axios from 'axios';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../components/firebase/context';

/* TO-DO
    User name is coming after some delay...
    I think we should include object id in the imageurl
*/

const port = process.env.PORT || 4000;
let url = 'http://localhost:';
if (process.env.NODE_ENV === 'production')
  url = 'https://save-environment-iittp.herokuapp.com';
else url = `http://localhost:${port}`;

toast.configure();

function Sell() {
  const { user } = useContext(AuthContext);
  // console.log(user);

  const initialSellItem = {
    title: "",
    category: "",
    description: "",
    price: "",
    address: "",
    mobileNumber: "",
    name: "",
    username: "",
    image: [],
  };

  // console.log(initialSellItem);

  const [sellItem, setSellItem] = useState(initialSellItem);
  const [validity, setValidity] = useState(initialSellItem);
  const [file, setFile] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const getImage = async () => {
      const f = file[file.length-1];
      if (f) {
        console.log(f);
        const data = new FormData();
        data.append('name', f.name);
        data.append('file', f);

        const image = await axios.post(`${url}/files/uploadImage`, data); // upload the image to the database
        console.log(image.data);
        
        const newSellItem = JSON.parse(JSON.stringify(sellItem));
        newSellItem.image.push(image.data);
        setSellItem(newSellItem);
        console.log(sellItem);
      }
  };
  getImage();
  }, [file]);

  const handleChange = (e) => {
    const { value, name } = e.target;
    const newSellItem = JSON.parse(JSON.stringify(sellItem));
    if(name === "price" || name === "mobileNumber")
      newSellItem[name] = value.toString(10);
    else
      newSellItem[name] = value;

    setSellItem(newSellItem);
    
  }

  const handleImageChange = (f) => {
    const a = JSON.parse(JSON.stringify(file));
    a.push(f);
    setFile(a);
  }

  const handlePost = (e) => {
    const newValidity = {
      title: "",
      category: "",
      description: "",
      price: "",
      address: "",
      mobileNumber: "",
      name: "",
      username: "",
    };
    let flag=0;
    if(sellItem.category.length === 0){
      newValidity["category"] = " is-invalid";
      flag=1;
    }
    if(sellItem.title.length === 0){
      newValidity["title"] = " is-invalid";
      flag=1;
    }
    if(sellItem.description.length === 0){
      newValidity["description"] = " is-invalid";
      flag=1;
    }
    if(sellItem.price.length === 0){
      newValidity["price"] = " is-invalid";
      flag=1;
    }
    if(sellItem.image.length === 0){
      newValidity["image"] = " is-invalid";
      flag=1;
    }
    if(sellItem.address.length === 0 || sellItem.mobileNumber.indexOf('-') > -1){
      newValidity["address"] = " is-invalid";
      flag=1;
    }
    if(sellItem.mobileNumber.length !== 10 || sellItem.mobileNumber.indexOf('e') > -1 || sellItem.mobileNumber.indexOf('.') > -1 || sellItem.mobileNumber.indexOf('+') > -1 || sellItem.mobileNumber.indexOf('-') > -1){
      newValidity["mobileNumber"] = " is-invalid";
      flag=1;
    }
    setValidity(newValidity);

    if(flag === 0){
      const newSellItem = JSON.parse(JSON.stringify(sellItem));
      newSellItem.name = user.firstName + " " + user.lastName;
      newSellItem.username = user.username;

      console.log(newSellItem);
      axios.post(`${url}/buyItems`, newSellItem)
      .then(() => {
        toast('Your Add is added to Buy page...');
        setSellItem(initialSellItem);
        
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

            <label for="addImage" className="form-label labels">
              Add Images of your Add
            </label>
            <div className="input-group mb-3">
              <input type="file" name="ImageInput" className={"form-control" + validity["image"]} id="inputImageFile" onChange={(e) => {handleImageChange(e.target.files[0])}} required />
            </div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={buyImage} className="d-block w-100" alt="..."/>
              </div>
                {
                  sellItem.image.map((imageUrl) => <div className="carousel-item">
                  <img src={imageUrl} className="d-block w-100 inputImages" alt={buyImage}/>
                </div>)}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" style={{backgroundColor: "black"}} aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" style={{backgroundColor: "black"}} aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>

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
