import { deleteUser, GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import axios from "axios";
import { auth } from "../firebase";

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async (history) => {  
    const result = await signInWithPopup(auth,provider);
    const user = result.user;
    console.log(user.uid);
    const username = user.email.substring(0,user.email.indexOf('@'));
    const names = user.displayName.split(' ');
    const email = user.email;
    // check if user with given username exists
    const response = await axios.get("http://localhost:4000/users/findUsername",{params: {username: username}});
    // if a user with given username exists
    if(response.data){
        const user_username = response.data;
        if(user_username.email === email){
            history.push("/home");// sign in the user after matching the credentials
        }
        else{
            alert("Username exists with other email");
            deleteUser(auth.currentUser)
            .then(() => {
                console.log("User deleted successfully");
            })
            .catch((error) => console.log(error));
        }
    }
    else{
        const response = await axios.get("http://localhost:4000/users/findEmail",{params: {email: email}});
        // if user with given email exists
        if(response.data) {
            alert("Email exists with another username");
        }
        else{
            // registration
            try {
                const response = await axios.post("http://localhost:4000/users/register",{
                    username: username,
                    firstName: names[0],
                    lastName: names[1],
                    email: email,
                    password: "",
                });
                console.log(response);
            }
            catch (error) {
                if(error.hasOwnProperty(error.response.data.errors)){
                    console.log(error.response.data.errors[0]);
                    alert(error.response.data.errors[0].msg);
                }
                else{
                    alert('An error occurred');
                }
            }
        }
    }
}