import './homepage.css';

const Homepage = () => {
    return (
        <div className = "conatainer-fluid">
            <div className="container mt-5" id = "content">
                <div className="row align-items-center text-center">
                    <div className="col-md-6">
                        <img src="../imgs/jar.jpg" alt="jar.jpg " className="img-fluid rounded py-5 img" />
                    </div>
                    <div className="col-md-6">
                        <h2>Lorem</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates dolorem cumque minima ut vel hic aliquam pariatur repudiandae possimus quis necessitatibus soluta culpa modi expedita, quas cupiditate? Veritatis, magnam eligendi.
                        Et pariatur odio nam architecto debitis suscipit voluptates hic. Quos maxime, dicta soluta, itaque aliquid consequuntur sapiente animi a, saepe mollitia veritatis placeat cumque voluptates. Ducimus voluptatum eum atque quibusdam?</p>
                    </div>
                </div>
            </div>
            
            <footer className="footer-dark mx-0">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 item">
                            <h3>Links</h3>
                            <ul>
                                <li><a href="#">link 1</a></li>
                                <li><a href="#">link 2</a></li>
                                <li><a href="#">link 3</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 item">
                            <h3>Links</h3>
                            <ul>
                                <li><a href="#">link 1</a></li>
                                <li><a href="#">link 2</a></li>
                                <li><a href="#">link 3</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 item">
                            <h3>About</h3>
                            <ul>
                                <li>
                                    <a href="#">Team</a>
                                </li>
                                <li>
                                    <a href="#">FAQ</a>
                                </li>
                                <li>
                                    <a href="#">Something</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 item text">
                            <h3>*.com</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam itaque, distinctio error facilis aliquid ecusandae ipsam vitae omnis quo inventore?</p>
                        </div>
                        <div className="col item social">
                            <a href="#"><i className="bi bi-facebook"></i></a>
                            <a href="#"><i className="bi bi-twitter"></i></a>
                            <a href="#"><i className="bi bi-youtube"></i></a>
                            <a href="#"><i className="bi bi-instagram"></i></a>
                            <a href="#"><i className="bi bi-google"></i></a>
                            <a href=""><i className="bi bi-github"></i></a>
                        </div>
                    </div>
                    <p className="copyright">*.com © 2021</p>
                </div>
            </footer>
        </div>

    );
}

export default Homepage;