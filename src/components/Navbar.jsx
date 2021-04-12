import React from 'react';
import {Link} from 'react-router-dom';
import './components.css';

const Navbar = () => (
    <nav className="navbar custom-navbar">
        <Link to="/" className="navbar-brand">Home</Link>
        <div className="pull-right">
            <Link to="/two" className="nav-item">Page Two</Link>
            <Link to="/three" className="nav-item">Page Three</Link>
            <Link to="/four" className="nav-item">Page Four</Link>
        </div>
    </nav>
)

export default Navbar;