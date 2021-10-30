import './homepage0.css';

const Homepage0 = () => {
    return (
        <div id="homepage0">
            <nav className="navbar navbar-dark bg-dark fixed-top">
                <a href="/home0" className="navbar-brand"><i>$ave Environment</i></a>
                <div className="d-inline-block">
                    <a href="/authentication" class="btn btn-outline-primary btn-sm mx-2" role="button">Sign In</a>
                    <span id="span1">/</span>
                    <a href="/authentication" class="btn btn-outline-primary btn-sm mx-2 me-3" role="button">Sign Up</a>
                </div>
            </nav>
            <div className="container mt-5" id = "homepage0-content">
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
                <div className="row mb-4 justify-content-center">
                    <div className="col-2 text-end">About</div>
                    <div className="col-2 text-center">FAQ</div>
                    <div className="col-2">Something</div>
                </div>
                <div className="col item social">
                    <a href="#"><i className="bi bi-facebook"></i></a>
                    <a href="#"><i className="bi bi-twitter"></i></a>
                    <a href="#"><i className="bi bi-youtube"></i></a>
                    <a href="#"><i className="bi bi-instagram"></i></a>
                    <a href="#"><i className="bi bi-google"></i></a>
                    <a href=""><i className="bi bi-github"></i></a>
                </div>
                <p className="copyright">*.com © 2021</p>
            </footer>
        </div>
    );
}

export default Homepage0;