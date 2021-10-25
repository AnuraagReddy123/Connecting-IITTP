import React from 'react'
import ProfilePic from '../profilepic1.png';
import { useHistory } from "react-router";
import './Userprofile.css';

function Userprofile() {

    const history = useHistory();
    // const navigateTo = () => history.push('/changepwd');
 return (
     <div>
          <div className="userProfileStylesClass"> 
          <h2>User Profile</h2>
        <div class="card">
<img src={ProfilePic} className="profilewidthclass" alt="userimg"/>
<div className="row"> 
                       <div className="col-md-6 col-xs-12 form-group textAlignClass">
                           <label> FIRST NAME</label>
                       </div>
                       <div className="col-md-6 col-xs-12 form-group textAlignLeftClass">
                           <b>harshitha</b>
                       </div>
                       <div className="col-md-6 col-xs-12 form-group textAlignClass">
                           <label> LAST NAME</label>
                       </div>
                       <div className="col-md-6 col-xs-12 form-group textAlignLeftClass">
                           <b>kapa</b>
                       </div>
                       <div className="col-md-6 col-xs-12 form-group textAlignClass">
                           <label> USER NAME</label>
                       </div>
                       <div className="col-md-6 col-xs-12 form-group textAlignLeftClass">
                           <b>harshitha1</b>
                       </div>
                       <div className="col-md-6 col-xs-12 form-group textAlignClass">
                           <label> EMAIL ADDRESS</label>
                       </div>
                       <div className="col-md-6 col-xs-12 form-group textAlignLeftClass">
                           <b>harshithakapa@gmail.com</b>
                       </div>
                       <div className="col-md-6 col-xs-12 form-group textAlignClass">
                           <label> MONEY SAVED TILL NOW</label>
                       </div>
                       <div className="col-md-6 col-xs-12 form-group textAlignLeftClass">
                           <b>500</b>
                       </div> 
                        <div className="changepwdBtn">
                          <button onClick={()=>history.push('/Pwdchange')} >
                              Change Password
                          </button>
                        </div>
                   </div>
</div>
</div>

 )
</div>
 )}

export default Userprofile;
