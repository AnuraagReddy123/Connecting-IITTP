// changing password
import React from "react";
import { useHistory } from "react-router";
import './pwdchange.css'

function Pwdchange(props) {

    const history = useHistory();
    const navigateTo = () => history.push('/userprofile');

    return (
        <div>
            <div className="userProfileStylesClass"> <h2> Change Password</h2>
                <div className="card space-pwd">
                    <div className="row">
                        <div className=" form-group col-xs-12 textAlignLeftClass paddingLabelClass PaddingtopClass" for="Old password">
                            <label className="Label-text"> Old Password</label><br />
                            <div className="col-xs-12">
                                <input
                                    type="Password"
                                    className="form-control mb-3 Fieldswidthclass"
                                    id="oldpwdInput"
                                    name="old password"
                                    onChange={props.handleChange}
                                    value="some old password"
                                    required
                                ></input>
                            </div>
                        </div>
                        <div className=" form-group col-xs-12 textAlignLeftClass paddingLabelClass" for="New password">
                            <label className="Label-text"> New Password </label>

                            <div className="col-xs-12">
                                <input
                                    type="Password"
                                    className="form-control mb-3 Fieldswidthclass"
                                    id="newpwdInput"
                                    name="new  password"
                                    onChange={props.handleChange}
                                    value="some new password"
                                    required
                                ></input>
                            </div>
                        </div>
                        <div className="invalid-feedback">Please enter Password!</div>
                        <div className="okbtn">
                            <button onClick={()=>history.push('/Userprofile')}>
                                OK
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pwdchange;