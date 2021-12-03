import React, { useState } from 'react';

import { Link } from 'react-router-dom';

const Navbar = () => {
    /* const [click, setclick] = useState(false); */
    /*   const handleClick = () => setclick(!click);
      const closeMobileMenu = () => setclick(false); */
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" >Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link to='/' className="nav-link active">Accueil</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/' className="nav-link" >Login

                                </Link>
                            </li>

                            
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-sm-2" type="text" placeholder="Search" />
                            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>

                </div>
            </nav>
        </>
    );
}
export default Navbar;