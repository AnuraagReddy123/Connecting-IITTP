import { onAuthStateChanged } from "@firebase/auth";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { auth } from "./firebase";

const port = process.env.PORT || 4000;
let url = 'http://localhost:';
if (process.env.NODE_ENV === 'production')
  url = 'https://save-environment-iittp.herokuapp.com';
else url = `http://localhost:${port}`;
export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [user, setuser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, async (auth_user) => {
            if(auth_user) {
                const result = await axios.get(`${url}/users/findEmail`,{params: {email: auth_user.email}});
                const user = result.data;
                console.log("user changed");
                console.log(user);
                setuser(user);
            }
        })
    }, [])

    return (
        <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
    );
};