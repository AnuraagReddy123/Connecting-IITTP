import React, { useState, useEffect, useContext } from "react";
import { Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Image from "./default.jpg";
import axios from "axios";
import "./profile.css";
import BuyingCard from "../../components/BuyingCard/buyingCard";
import ProductDetails from "../../components/BuyingCard/productDetails";
import { AuthContext } from '../../components/firebase/context';

function Profile() {

  let { user } = useContext(AuthContext);
  console.log(user);
  if(!user)
    user = {username: "", firstName: "", lastName: "", email: "", password: ""};

  const [activeTab, setActiveTab] = useState([" active", ""]);
  const [tabContent, setTabContent] = useState(["", "none"]);
  const [userDetails, setUserDetails] = useState(user);
  const [userAdds, setUserAdds] = useState([]);
  const [add, setAdd] = useState({});
  // const [file, setFile] = useState('');

  const port = process.env.PORT || 4000;
  let url = "http://localhost:";
  if (process.env.NODE_ENV === "production")
    url = "https://save-environment-iittp.herokuapp.com";
  else url = `http://localhost:${port}`;

  useEffect(() => {
    axios.get(`${url}/buyItems`).then((response) => {
      let arr = [];
      arr = response.data;
      setUserAdds(arr.filter((i) => i.username === userDetails.username));
    }); 
    setUserDetails(user);
  });

  const handleTab = (i) => {
    const t = ["", ""];
    t[i] = " active";
    setActiveTab(t);
    const u = ["none", "none"];
    u[i] = "";
    setTabContent(u);
  };

  const handleDelete = (id) => {
    axios.delete(`${url}/buyItems/${id}`)
      .then(res => {
        const userAdds = userAdds.filter(item => item._id !== id);  
        setUserAdds(userAdds);
        console.log("Deleted");
      })
      .catch(err => {
        console.log(err);
      });
  }

  // const handleImage = (i) => {
  //   setFile(i);
  //   const data = new FormData();
  //   data.append('name', file.name);
  //   data.append('file', file);

  //   const image = await axios.post(`${url}/files/uploadImage`, data); // upload the image to the database
  //   console.log(image.data);
  //   user.image = image.data;
  // }

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/userprofile"
          render={() => (
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-2">
                  <div className="card imageCard">
                    <img src={/*user.image*/Image} className="card-img-top" alt="" />
                  </div>
                  <div /*type='file'*/ className="btn btn-primary changePhoto" /*onClick={(e) => handleImage(e.target.files[0])}*/>Change Photo</div>
                </div>
                <div className="col-md-10">
                  <div className="card details">
                      <div className="container">
                        <div className="row"><div className="col-md-2"><p className="userDetailTitles">User Name</p></div><div className="col-md-8"><p className="userDetail">{userDetails["username"]}</p></div></div>
                        <div className="row"><div className="col-md-2"><p className="userDetailTitles">First Name</p></div><div className="col-md-8"><p className="userDetail">{userDetails["firstName"]}</p></div></div>
                        <div className="row"><div className="col-md-2"><p className="userDetailTitles">Last Name</p></div><div className="col-md-8"><p className="userDetail">{userDetails["lastName"]}</p></div></div>
                        <div className="row"><div className="col-md-2"><p className="userDetailTitles">Email</p></div><div className="col-md-8"><p className="userDetail">{userDetails["email"]}</p></div></div>
                      </div>
                  </div>
                  <div className="card shadow p-3 bg-white rounded tabs">
                    <div className="card-header">
                      <ul className="nav nav-tabs card-header-tabs">
                        <li key="1" className="nav-item">
                          <a
                            className={"nav-link " + activeTab[0]}
                            href="#"
                            onClick={() => handleTab(0)}
                          >
                            Your Blogs
                          </a>
                        </li>

                        <li key="2" className="nav-item">
                          <a
                            className={"nav-link " + activeTab[1]}
                            href="#"
                            onClick={() => handleTab(1)}
                          >
                            Your Adds
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="container-fluid" style={{display: tabContent[1]}}>
                      <div className="row yourAdds">
                        {userAdds.map((add) => (
                          <div className="userAddsList">
                              <Link to="/add" className="buying_card" onClick={() => setAdd(add)}>
                                <BuyingCard productDetails={add} />
                              </Link>
                              {/* <div className="col-6 btn btn-sm btn-secondary" onClick={() => handleUpdate(add)}>Update</div> */}
                              <div className="col-6 btn btn-sm btn-danger del" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setAdd(add)}>Delete</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="container-fluid " style={{display: tabContent[0]}}>
                      <div className="row yourBlogs">
                        BLOGS....
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        Do you really want to delete your add...
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => handleDelete(add._id)}>Yes</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        />
        <Route exact path="/add" render={() => <div className="userAdd"><ProductDetails productDetails={add}/></div> } />
      </Switch>
    </Router>
  );
}

export default Profile;
