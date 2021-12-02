// changing password
import { useHistory } from "react-router";
import React, {useState} from "react";
import './pwdchange.css'
import axios from "axios";
import { auth } from "./firebase/firebase";
import { sendPasswordResetEmail } from "@firebase/auth";

const port = process.env.PORT || 4000;
let url = 'http://localhost:';
if (process.env.NODE_ENV === 'production')
  url = 'https://save-environment-iittp.herokuapp.com';
else url = `http://localhost:${port}`;

function Pwdchange() {

    const [email, setEmail] = useState("");
    const handleChange = (e) => {
        const { value } = e.target;
        setEmail(value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userDetails = await axios.get(`${url}/users/findEmail`,{params: {email: email}});
        if(userDetails){
            sendPasswordResetEmail(auth,userDetails.data.email)
            .then(() => {
                console.log("email sent successfully");
            })
            .catch((error) => {
                console.log("An error occurred" + error);
            })
        }
        else{
            alert("Email doesn't exist");
        }
    }

    return (
        <div className="pchange">
            <form onSubmit={handleSubmit}>
                <label for="emailForForgotPassword" className="form-label inputHeading">Enter the email address with which you logged In</label>
                <input type="email" className="form-control" id="emailForForgotPassword" onChange={handleChange}/>
                <button type="submit">Send email</button>
            </form>
        </div>
    );
}

export default Pwdchange;