import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import Person2Icon from '@mui/icons-material/Person2';
import SearchIcon from '@mui/icons-material/Search';
import { useAuth } from '../Authcontext';

function Navigation() {
    const { isAuthenticated, logout } = useAuth();  // Access authentication state and logout function
    console.log('Is Authenticated:', isAuthenticated);

    return (
        <div className="NavBar">
            <nav className="navbar navbar-expand-lg">
                <Link className="navbar-brand" to="/"><img src="ShareRippyLogo.jpg" alt="logo" id='logo' /></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="ctg">Category</Link>
                        </li>
                        {/* Show Profile link only when user is authenticated */}
                        {isAuthenticated && (
                            <li className="nav-item active">
                                <Link className="nav-link" to="prf">Profile</Link>
                            </li>
                        )}
                    </ul>
                    <div className="container">
                        <form className="d-flex align-items-center" role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button className="navbtn btn-outline-light" type="submit"><SearchIcon />Search</button>
                            {/* Show Login button if not authenticated; otherwise, show Logout button */}
                            {!isAuthenticated ? (
                                <Link className="navbtn btn-outline-light" to="login"><><Person2Icon />Login</></Link>
                            ) : (
                                <button className="navbtn btn-outline-light" onClick={logout}><><Person2Icon />Logout</></button>
                            )}
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;
