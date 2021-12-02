import React, { useContext, useState } from 'react';
import { AuthContext } from './firebase/context';
import { auth } from "./firebase/firebase";
import { signOut } from "@firebase/auth"
import { useHistory  } from 'react-router';
import './navbar.css';
const Navbar = () => {

    const { user } = useContext(AuthContext);

    const history = useHistory();

    //checking wether the user is signed in or not
    const checkLogin = (e) => {
        if(!user){
            alert("Sign In to access");
            e.preventDefault();
        }
    }

    const logout = () =>{
        signOut(auth).then(() => {
            // redirecting to the hompepage
            history.push("/");
            window.location.reload();
            alert("logged out successfully");
          }).catch((error) => {
            alert("Error in logout");
          });
    }

    return (
        <nav id="mainNavbar" class="navbar navbar-dark bg-dark navbar-expand-md px-3 py-2 fixed-top">
            <a className="navbar-brand" href="/"><i>$ave Environment</i></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a className="nav-link active" href="/blogspage">Blogs</a>
                    </li>
                    <li class="nav-item">
                        <a className="nav-link active" onClick={checkLogin} href="/writeBlog">Add Blog</a>
                    </li>
                    <li class="nav-item">
                        <a className="nav-link active" onClick={checkLogin} href="/userprofile">Profile</a>
                    </li>
                    <li class="nav-item">
                        <a className="nav-link active" onClick={checkLogin} href="/buy">Buy</a>
                    </li>
                    <li class="nav-item">
                        <a className="nav-link active" onClick={checkLogin} href="/sell">Sell</a>
                    </li>
                    <li className="nav-item dropdown active">
                        <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Categories
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a className="dropdown-item" href="/travelling">Travelling</a></li>
                            <li><a className="dropdown-item" onClick={checkLogin} href="/electricity">Electricity</a></li>
                            <li><a className="dropdown-item" href="/food">Food</a></li>
                            <li><a className="dropdown-item" href="/shopping">Shopping</a></li>
                            <li><a className="dropdown-item" href="/homeCategory">Home</a></li>
                        </ul>
                    </li>

                </ul>
                {!user ? (
                    <div className="d-flex justify-content-end /*invisible*/">
                        <a href="/authentication" class="btn btn-outline-primary btn-sm mx-2" role="button">Sign In</a>
                        <span id="span1">/</span>
                        <a href="/authentication" class="btn btn-outline-primary btn-sm mx-2 me-3" role="button">Sign Up</a>
                    </div>) : (<div>
                        <button type="button" class="btn btn-outline-primary btn-sm mx-2" onClick = {logout}>Logout</button>
                    </div>)}
            </div>
        </nav>
    );
}

export default Navbar;