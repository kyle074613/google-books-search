import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {

    const location = useLocation();

    return (
        <div className="row mb-2">
            <div className="col">
                <nav className="navbar navbar-expand navbar-light bg-light p-0">
                    <div className="navbar-brand">Google Books</div>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/search"
                                    className={location.pathname === "/" ? "nav-link active" : location.pathname === "/search" ? "nav-link active" : "nav-link"}>
                                    Search
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/saved" className={location.pathname === "/saved" ? "nav-link active" : "nav-link"}>
                                    Saved
                        </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;