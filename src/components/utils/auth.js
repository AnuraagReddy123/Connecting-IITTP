import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import { auth } from "../firebase";

const provider = new GoogleAuthProvider();

export const signInWithGoogle = (history) => {
    signInWithPopup(auth,provider)
    .then((result) => {
        // const user = result.user;
        // TODO: check if user exists already, if yes, log in else sign up by storing the user information
        history.push("/");
    })
    .catch((error) => console.log(error));
}