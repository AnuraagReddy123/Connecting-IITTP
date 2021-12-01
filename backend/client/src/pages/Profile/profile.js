import React, { useState, useEffect } from 'react';
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Image from './default.jpg';
import axios from 'axios';
import './profile.css';
import BuyingCard from '../../components/BuyingCard/buyingCard';
import ProductDetails from '../../components/BuyingCard/productDetails';
import BlogCard from '../../components/BlogCard/BlogCard';

function Profile() {
  const [activeTab, setActiveTab] = useState([' active', '']);
  const [tabContent, setTabContent] = useState(['', 'none']);
  const [username, setUsername] = useState('abc');
  const [userAdds, setUserAdds] = useState([]);
  const [userDetails, setUserDetails] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
  });
  const [add, setAdd] = useState({});
  const [blogs, setBlogs] = useState([]);

  const port = process.env.PORT || 4000;
  let url = 'http://localhost:';
  if (process.env.NODE_ENV === 'production')
    url = 'https://save-environment-iittp.herokuapp.com';
  else url = `http://localhost:${port}`;

  useEffect(() => {
    axios.get(`${url}/buyItems`).then((response) => {
      let arr = [];
      arr = response.data;
      setUserAdds(arr.filter((i) => i.username === username));
    });
    axios.get(`${url}/users`).then((response) => {
      let arr = [];
      arr = response.data;
      const det = arr.filter((i) => i.username === 'cs19b031');
      // console.log(det);
      setUserDetails(det[0]);
    });
    const fetchBlogs = () => {
      axios
        .get(`${url}/blogs`)
        .then((res) => {
          let arr = [];
          arr = res.data;
          setBlogs(arr.filter((i) => i.username === username));
        })
        .catch((err) => console.log(err));
    };
    fetchBlogs();
  });

  const handleTab = (i) => {
    const t = ['', ''];
    t[i] = ' active';
    setActiveTab(t);
    const u = ['none', 'none'];
    u[i] = '';
    setTabContent(u);
  };

  const handleClick = (a) => {
    setAdd(a);
  };

  const handleDelClick = (a) => {
    setAdd(a);
  };

  const handleDelete = (id) => {
    axios
      .delete(`${url}/buyItems/${id}`)
      .then((res) => {
        const userAdds = userAdds.filter((item) => item._id !== id);
        setUserAdds(userAdds);
        console.log('Deleted');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Router>
      <Switch>
        <Route
          exact
          path='/userprofile'
          render={() => (
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-md-2'>
                  <div className='card imageCard'>
                    <img src={Image} className='card-img-top' alt='' />
                  </div>
                  <div className='btn btn-primary changePhoto'>
                    Change Photo
                  </div>
                </div>
                <div className='col-md-10'>
                  <div className='card details'>
                    <div className='container'>
                      <div className='row'>
                        <div className='col-md-2'>
                          <p className='userDetailTitles'>User Name</p>
                        </div>
                        <div className='col-md-8'>
                          <p className='userDetail'>
                            {userDetails['username']}
                          </p>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-md-2'>
                          <p className='userDetailTitles'>First Name</p>
                        </div>
                        <div className='col-md-8'>
                          <p className='userDetail'>
                            {userDetails['firstName']}
                          </p>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-md-2'>
                          <p className='userDetailTitles'>Last Name</p>
                        </div>
                        <div className='col-md-8'>
                          <p className='userDetail'>
                            {userDetails['lastName']}
                          </p>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-md-2'>
                          <p className='userDetailTitles'>Email</p>
                        </div>
                        <div className='col-md-8'>
                          <p className='userDetail'>{userDetails['email']}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='card shadow p-3 bg-white rounded tabs'>
                    <div className='card-header'>
                      <ul className='nav nav-tabs card-header-tabs'>
                        <li key='1' className='nav-item'>
                          <a
                            className={'nav-link ' + activeTab[0]}
                            href='#'
                            onClick={() => handleTab(0)}
                          >
                            Your Blogs
                          </a>
                        </li>

                        <li key='2' className='nav-item'>
                          <a
                            className={'nav-link ' + activeTab[1]}
                            href='#'
                            onClick={() => handleTab(1)}
                          >
                            Your Adds
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div
                      className='container-fluid'
                      style={{ display: tabContent[1] }}
                    >
                      <div className='row yourAdds'>
                        {userAdds.map((add) => (
                          <div className='userAddsList'>
                            <Link
                              to='/add'
                              className='buying_card'
                              onClick={() => handleClick(add)}
                            >
                              <BuyingCard productDetails={add} />
                            </Link>
                            {/* <div className="col-6 btn btn-sm btn-secondary" onClick={() => handleUpdate(add)}>Update</div> */}
                            <div
                              className='col-6 btn btn-sm btn-danger del'
                              data-bs-toggle='modal'
                              data-bs-target='#exampleModal'
                              onClick={() => handleDelClick(add)}
                            >
                              Delete
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div
                      className='container-fluid '
                      style={{ display: tabContent[0] }}
                    >
                      <div className='row yourBlogs'>
                        {blogs.map((blog) => {
                          <div>
                              <Link
                                to={`/singleBlog/${blog._id}`}
                                style={{
                                  textDecoration: 'none',
                                  color: 'inherit',
                                }}
                              >
                                <BlogCard blog={blog} />
                              </Link>
                          </div>
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div
                  className='modal fade'
                  id='exampleModal'
                  tabindex='-1'
                  aria-labelledby='exampleModalLabel'
                  aria-hidden='true'
                >
                  <div className='modal-dialog'>
                    <div className='modal-content'>
                      <div className='modal-header'>
                        <button
                          type='button'
                          className='btn-close'
                          data-bs-dismiss='modal'
                          aria-label='Close'
                        ></button>
                      </div>
                      <div className='modal-body'>
                        Do you really want to delete your add...
                      </div>
                      <div className='modal-footer'>
                        <button
                          type='button'
                          className='btn btn-danger'
                          data-bs-dismiss='modal'
                          onClick={() => handleDelete(add._id)}
                        >
                          Yes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        />
        <Route
          exact
          path='/add'
          render={() => (
            <div className='userAdd'>
              <ProductDetails productDetails={add} />
            </div>
          )}
        />
      </Switch>
    </Router>
  );
}

export default Profile;
