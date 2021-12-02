// changing password
import { useHistory } from "react-router";
import React, {useState} from "react";
import './pwdchange.css'

function Pwdchange() {

    const [email, setEmail] = useState("");
    const handleChange = (e) => {
        const { value } = e.target;
        setEmail(value);
    }

    return (
        <div className="pchange">
                <label for="emailForForgotPassword" className="form-label inputHeading">Enter the email address with you last logged In</label>
                <input type="email" className="form-control" id="emailForForgotPassword" onChange={handleChange}/>
        </div>
    );
}

export default Pwdchange;