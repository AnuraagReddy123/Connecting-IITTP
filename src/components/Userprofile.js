import React, { useContext } from 'react';
import ProfilePic from '../profilepic1.png';
import { Redirect, useHistory } from 'react-router';
import './Userprofile.css';
import { AuthContext } from './firebase/context';

function Userprofile() {
  const history = useHistory();
  // get the signed in user
  const { user } = useContext(AuthContext);
  console.log(user);
  // const navigateTo = () => history.push('/changepwd');
  return (
    <div>
      <div className='userProfileStylesClass'>
      {!user ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>User Profile</h2>
          <div class='card userprofile'>
            <img src={ProfilePic} className='profilewidthclass' alt='userimg' />
            <div className='row'>
              <div className='col-md-6 col-xs-12 form-group textAlignClass'>
                <label> FIRST NAME</label>
              </div>
              <div className='col-md-6 col-xs-12 form-group textAlignLeftClass'>
                <b>{user.firstName}</b>
              </div>
              <div className='col-md-6 col-xs-12 form-group textAlignClass'>
                <label> LAST NAME</label>
              </div>
              <div className='col-md-6 col-xs-12 form-group textAlignLeftClass'>
                <b>{user.lastName}</b>
              </div>
              <div className='col-md-6 col-xs-12 form-group textAlignClass'>
                <label> USER NAME</label>
              </div>
              <div className='col-md-6 col-xs-12 form-group textAlignLeftClass'>
                <b>{user.username}</b>
              </div>
              <div className='col-md-6 col-xs-12 form-group textAlignClass'>
                <label> EMAIL ADDRESS</label>
              </div>
              <div className='col-md-6 col-xs-12 form-group textAlignLeftClass'>
                <b>{user.email}</b>
              </div>
              <div className='col-md-6 col-xs-12 form-group textAlignClass'>
                <label> MONEY SAVED TILL NOW</label>
              </div>
              <div className='col-md-6 col-xs-12 form-group textAlignLeftClass'>
                <b>500</b>
              </div>
              <div className='changepwdBtn'>
                <button
                  className='changePwdBtn'
                  onClick={() => history.push('/Pwdchange')}
                >
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
        
      </div>
    </div>
  );
}

export default Userprofile;
