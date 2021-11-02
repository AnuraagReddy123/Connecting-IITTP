import './navbar.css';
const Navbar = () => {
    return (
        <nav id="mainNavbar" class="navbar navbar-dark bg-dark navbar-expand-md px-3 py-2 fixed-top">
            <a className="navbar-brand" href="/"><i>$ave Environment</i></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a className="nav-link active" href="/blogspage">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a className="nav-link active" href="/writeBlog">Add Blog</a>
                    </li>
                    <li class="nav-item">
                        <a className="nav-link active" href="/userprofile">Profile</a>
                    </li>
                    <li className="nav-item dropdown active">
                        <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Categories
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a className="dropdown-item" href="/travelling">Travelling</a></li>
                            <li><a className="dropdown-item" href="/electricity">Electricity</a></li>
                            <li><a className="dropdown-item" href="/food">Food</a></li>
                            <li><a className="dropdown-item" href="/shopping">Shopping</a></li>
                            <li><a className="dropdown-item" href="/homeCategory">Home</a></li>
                            {/* <li><a className="dropdown-item" href="/">Food</a></li> */}
                        </ul>
                    </li>
                    {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown link
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li> */}
                </ul>
            </div>
        </nav>


    );
}

export default Navbar;