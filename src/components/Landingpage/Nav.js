import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Logo from './Logo.png'; // Update with the correct path to your logo image

const MyAppBar = () => {
  return (
    <AppBar position="fixed" sx={{ bgcolor: 'transparent', color: 'black' }}>
      <Toolbar sx={{ maxWidth: '1300px', margin: '0 auto', justifyContent: 'space-between' }}>
        <Typography variant="h6">
          <img style={{ maxWidth: '100px', height: 'auto',marginRight:'600px' }} src={Logo} alt="Image Description" />
        </Typography>
        
        <TextField
          variant="outlined"
          placeholder="Search..."
          size="small"
          sx={{ bgcolor: 'white', borderRadius: 1, width: '300px' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        <div className="icons" sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton>
            <FavoriteBorderOutlinedIcon />
          </IconButton>
          <IconButton>
            <ShoppingCartOutlinedIcon />
          </IconButton>
          <IconButton>
            <PersonOutlineOutlinedIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default MyAppBar;
