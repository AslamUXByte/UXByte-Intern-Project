import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import AddIcon from '@mui/icons-material/Add';
//for exmpale

const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="navbar-container">
        <div className="brand">
        <Link to="/" className="navbar-logo" style={{ textDecoration: 'none', color: 'black',fontWeight: 'bold' }}>
                ZONE
            </Link>
        </div>
        <AddIcon/>
        <div className="nav-links">
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/components" className="nav-item">Components</Link>
            <Link to="/pages" className="nav-item">Pages</Link>
            <Link to="/docs" className="nav-item">Docs</Link>
        </div>
        <div className="icons">
            <input type="text" placeholder="Search" className="search-icon" />
            <span className="settings-icon">⚙️</span>
            <button className="buy-button">Buy Now</button>
        </div>
    </div>
</nav>
 
);
}

export default Navbar;


