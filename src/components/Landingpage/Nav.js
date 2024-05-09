import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Button } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Logo from'../Landingpage/Logo.png';


const Nav = () => {
  return (
    <AppBar position="static" sx={{ bgcolor:'#F0FFFF', color: 'black' }}>
      <Toolbar sx={{ maxWidth: '1300px', margin: '0 auto',justifyContent: 'space-between',  }}>
      <Typography variant="h6">
          <img style={{ maxWidth: '10%', height: '10%' }} src={Logo} alt="Image Description" />
        </Typography>

        <div className="icons" sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton>
          <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon >         </IconButton>
          <IconButton>
          <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon > 
          </IconButton>
          <IconButton>
          <PersonOutlineOutlinedIcon></PersonOutlineOutlinedIcon >         </IconButton>

        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
