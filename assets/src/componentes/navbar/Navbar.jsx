import React from "react";

const Navbar = () => {
    return (
        <>
            <nav className="header-wrapper scroll-header"> 
                <div className="container">
                    <div className="row">
                        <div>
                            <div className="navigation">
                                <ul className="navbar-nav-list">
                                    <li className="nav-item">Home</li>
                                    <li className="nav-item">Prevention</li>
                                    <li className="nav-item">Qurantine</li>
                                    <li className="nav-item">Pages</li>
                                    <li className="nav-item">About</li>
                                    <li className="nav-item">About</li>
                                    <li className="nav-item">Help</li>
                                    <div class="signin-btn">
                                    <a class="btn btn-primary d-none d-lg-block" href="./tracker.html">Tracker</a>
                                    </div>
                                </ul>
                            </div>  
                        </div> 
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;