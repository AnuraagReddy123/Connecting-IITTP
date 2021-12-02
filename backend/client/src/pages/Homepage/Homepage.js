import { AuthContext } from '../../components/firebase/context';
import React, { useContext } from 'react';
import './homepage.css';

const Homepage = () => {

    const { user } = useContext(AuthContext);

    // to check wether the user has logged in
    const checkLogin = (e) => {
        if(!user){
            alert("Sign In to access");
            e.preventDefault();
        }
    }

    return (
        <div className="conatainer-fluid">
            <div className="container mt-5" id="homepage-content">
                <div className="row align-items-center text-center">
                    <div className="col-md-6">
                        <img src="../imgs/jar.jpg" alt="jar.jpg " className="img-fluid rounded py-5 img" />
                    </div>
                    <div className="col-md-6">
                        <h2>Our Goal</h2>
                        <p className="ourGoalContent">Climate Change is an ongoing problem that people are neglecting. Acting on climate change represents a trade-off between short-term and long-term benefits, which is the hardest trade-off to make. Our website provides you with different ways of saving environment along with protecting environment to make you more connected with the climate change problem</p>
                    </div>
                </div>
            </div>

            <footer className="footer-dark mx-0">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 item">
                            <h3>Categories</h3>
                            <ul>
                                <li><a href="/travelling">Travelling</a></li>
                                <li><a href="/electricity" onClick={checkLogin}>Electricity</a></li>
                                <li><a href="/food">Food</a></li>
                                <li><a href="/home">Home</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 item">
                            <h3>Products</h3>
                            <ul>
                                <li><a href="/shopping">Shopping</a></li>
                                <li><a href="/buy" onClick={checkLogin}>Buy</a></li>
                                <li><a href="/sell" onClick={checkLogin}>Sell</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 item">
                            <h3>Blog</h3>
                            <ul>
                                <li><a href="/blogspage">Blogs</a></li>
                                <li><a href="/writeblog" onClick={checkLogin}>Add Blog</a></li>
                                <li><a href="/" onClick={checkLogin}>My Blogs</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 item">
                            <h3>About</h3>
                            <ul>
                                <li>
                                    <a href="/">Team</a>
                                </li>
                                <li>
                                    <a href="/">FAQ</a>
                                </li>
                                <li>
                                    <a href="/">Feedback</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col item social">
                            <a href="#"><i className="bi bi-facebook"></i></a>
                            <a href="#"><i className="bi bi-twitter"></i></a>
                            <a href="#"><i className="bi bi-youtube"></i></a>
                            <a href="#"><i className="bi bi-instagram"></i></a>
                            <a href="#"><i className="bi bi-google"></i></a>
                            <a href="https://github.com/AnuraagReddy123/Save-Environment"><i className="bi bi-github"></i></a>
                        </div>
                    </div>
                    <p className="copyright">save-environment-iittp.herokuapp.com © 2021</p>
                </div>
            </footer>
        </div>

    );
}

export default Homepage;