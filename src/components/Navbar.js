import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import SearchIcon from '@mui/icons-material/Search';


const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="navbar-container">
        <div className="brand">
        <Link to="/" className="navbar-logo" style={{ textDecoration: 'none', color: 'black',fontWeight: 'bold',fontFamily: 'Arial, sans-serif', position: 'relative'}}>
                ZONE
                <span className="orange-dot"></span>
            </Link>
        </div>
        <div className="nav-links">
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/components" className="nav-item">Components</Link>
            <Link to="/pages" className="nav-item">Pages</Link>
            <Link to="/docs" className="nav-item">Docs</Link>
        </div>
        <div className="icons">
            <SearchIcon/>
            <span className="settings-icon">⚙️</span>
            <button className="buy-button">Buy Now</button>
        </div>
    </div>
</nav>
 
);
}

export default Navbar;


