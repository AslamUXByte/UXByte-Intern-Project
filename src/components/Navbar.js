// import React from 'react'
// import { Link } from 'react-router-dom';
// import './Navbar.css';
// import SearchIcon from '@mui/icons-material/Search';


// const Navbar = () => {
//   return (
//     <nav className="navbar">
//     <div className="navbar-container">
//         <div className="brand">
//         <Link to="/" className="navbar-logo" style={{ textDecoration: 'none', color: 'black',fontWeight: 'bold',fontFamily: 'Arial, sans-serif', position: 'relative'}}>
//                 ZONE
//                 <span className="orange-dot"></span>
//             </Link>
//         </div>
//         <div className="nav-links">
//             <Link to="/" className="nav-item">Home</Link>
//             <Link to="/components" className="nav-item">Components</Link>
//             <Link to="/pages" className="nav-item">Pages</Link>
//             <Link to="/docs" className="nav-item">Docs</Link>
//         </div>
//         <div className="icons">
//             <SearchIcon/>
//             <span className="settings-icon">⚙️</span>
//             <button className="buy-button">Buy Now</button>
//         </div>
//     </div>
// </nav>
 
// );
// }

// export default Navbar;
import React, { Component } from 'react';
import { ToggleButton, Typography, Stack, Box } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

export default class App extends Component {
  state = {
    selectedValue1: '128gb',
    selectedValue2: 'red'
  };

  handleSelection1 = (value) => {
    this.setState({ selectedValue1: value });
  };

  handleSelection2 = (value) => {
    this.setState({ selectedValue2: value });
  };

  render() {
    const { selectedValue1, selectedValue2 } = this.state;

    const getButtonStyle = (selectedValue, value) => ({
      border: selectedValue === value ? '2px solid black' : '1px solid grey',
      color: selectedValue === value ? 'black' : 'inherit',
      backgroundColor: selectedValue === value ? 'lightgrey' : 'inherit',
      position: 'relative',
      padding: '10px 20px',
      minWidth: '60px',
      minHeight: '40px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    });

    const getColorButtonStyle = (selectedValue, value, backgroundColor) => ({
      backgroundColor: backgroundColor,
      border: selectedValue === value ? '2px solid black' : '1px solid grey',
      position: 'relative',
      color: selectedValue === value ? 'black' : 'white',
      padding: '10px 20px',
      minWidth: '60px',
      minHeight: '40px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    });

    return (
        <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
          <ToggleButton
            value="red"
            selected={selectedValue2 === 'red'}
            onChange={() => this.handleSelection2('red')}
            sx={getColorButtonStyle(selectedValue2, 'red', 'red')}
          >
            {selectedValue2 === 'red' && <CheckIcon sx={{ position: 'absolute', right: 5, top: 5, fontSize: '16px' }} />}
          </ToggleButton>
          <ToggleButton
            value="blue"
            selected={selectedValue2 === 'blue'}
            onChange={() => this.handleSelection2('blue')}
            sx={getColorButtonStyle(selectedValue2, 'blue', 'blue')}
          >
            {selectedValue2 === 'blue' && <CheckIcon sx={{ position: 'absolute', right: 5, top: 5, fontSize: '16px' }} />}
          </ToggleButton>
          <ToggleButton
            value="green"
            selected={selectedValue2 === 'green'}
            onChange={() => this.handleSelection2('green')}
            sx={getColorButtonStyle(selectedValue2, 'green', 'green')}
          >
            {selectedValue2 === 'green' && <CheckIcon  sx={{ position: 'absolute', right: 10, top: 5, fontSize: '30px' }} />}
          </ToggleButton>
          <ToggleButton
            value="yellow"
            selected={selectedValue2 === 'yellow'}
            onChange={() => this.handleSelection2('yellow')}
            sx={getColorButtonStyle(selectedValue2, 'yellow', 'yellow')}
          >
            {selectedValue2 === 'yellow' && <CheckIcon sx={{ position: 'absolute', right: 5, top: 5, fontSize: '16px' }} />}
          </ToggleButton>
        </Stack>
    );
  }
}
