import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import { auth } from "../firebase";

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async (history) => {
    // check if user with given username exists
    // const response = await axios.get("http://localhost:4000/users/findUsername",{params: {username: userData.username}});
    // if(response.data) {
    //   const user = response.data;
    //   console.log(user);
    //   // compare passwords
    //   if(user.password === userData.password) {
    //     //credentials are valid, sign in the user
    //     const user_credential = await signInWithEmailAndPassword(auth,user.email,user.password);
    //     history.push("/home");
    //   }
    //   else{
    //     alert('Invalid password');
    //   }
    // }
    // else{
    //   alert('Invalid username');
    // }
    const result = await signInWithPopup(auth,provider);
    const user = result.user;
    console.log(user);
    // signInWithPopup(auth,provider)
    // .then((result) => {
    //     const user = result.user;
        
    //     history.push("/home");
    // })
    // .catch((error) => console.log(error));
}