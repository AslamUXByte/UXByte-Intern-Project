import { Avatar, Box, Button, Grid, InputAdornment, TextField, Typography,Stack } from '@mui/material'
import React from 'react'
import Divider from '@mui/material/Divider';
import Logo from './Logo.png'
import { pink,orange } from '@mui/material/colors';

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';












const Footer = () => {
  return (
    <div>
      <Divider component="li" />
      <Grid container spacing={2} sx={{ alignItems: 'flex-start', height: '80vh' }}>
        <Grid item xs={5} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'left' }}>
          <Typography>
            <img style={{ maxWidth: '65px', height: '25px' }} src={Logo} alt="Image Description" />
          </Typography>
          <Typography variant="h6" style={{ color: '#212B36', opacity: '.5', fontSize: '15px', fontWeight: '600', lineHeight: '1.25', fontFamily: "'__Barlow_92d964','__Barlow_Fallback_92d964',Helvetica,Arial,sans-serif", paddingBottom: '50px' }}>

            The starting point for your next project based on easy-to-customize Material-UI © helps you build apps faster and better.
          </Typography>

          <Typography variant="h6" style={{ color: '#212B36', fontSize: '17px', fontWeight: '600', lineHeight: '1.25', fontFamily: "'__Barlow_92d964','__Barlow_Fallback_92d964',Helvetica,Arial,sans-serif",  }}>
            Community
          </Typography>
          <Typography variant="h6" style={{ color: '#212B36', fontSize: '15px', fontWeight: '500', lineHeight: '1.25', fontFamily: "'__Barlow_92d964','__Barlow_Fallback_92d964',Helvetica,Arial,sans-serif",  }}>
            <Typography variant="body2" gutterBottom>
              Documentation
            </Typography>
            <Typography variant="body2" gutterBottom>
            Changelog
            </Typography>
            <Typography variant="body2" gutterBottom>
            Contributing
            </Typography>

          </Typography>
          <br/>
          <Typography variant="h6" style={{ color: '#212B36', fontSize: '17px', fontWeight: '600', lineHeight: '1.25', fontFamily: "'Poppins', sans-serif",  }}>
          Let’s stay in touch 
          </Typography>
          
          <Typography variant="h6" style={{ color: '#212B36', opacity: '.5', fontSize: '13px', fontWeight: '400', fontFamily: "'__Barlow_92d964','__Barlow_Fallback_92d964',Helvetica,Arial,sans-serif",marginBottom: '13px' }}>

          Subscribe to our newsletter to receive latest articles to your inbox weekly.          </Typography>

          <TextField
      variant="filled"
      placeholder="Email "
      size="medium"
      InputProps={{
        disableUnderline: true, // Disable the underline
        endAdornment: (
          <InputAdornment position="end">
            <Button
              variant="contained"
              size="large"
              disableElevation
              sx={{ bgcolor: '#212B36', color: 'white',height:'50px', '&:hover': { bgcolor: 'black',opacity:'.5' } }}
            >
              Subscribe
            </Button>
          </InputAdornment>
        ),
      }}
      sx={{ bgcolor: 'white', borderRadius: 1, width: '400px' }} // Adjusted width
    />   
           <br />

           <Typography variant="body1" gutterBottom>
            Social
            </Typography>
            <Stack direction="row" spacing={2}>

<Avatar sx={{bgcolor: 'transparent' }}>
<FacebookOutlinedIcon style={{ color: orange[500] }} /></Avatar>
<Avatar sx={{bgcolor: 'transparent' }}>
<LinkedInIcon style={{ color: orange[500] }} /></Avatar>
<Avatar sx={{bgcolor: 'transparent' }}>
<TwitterIcon style={{ color: orange[500] }} /></Avatar>

<Avatar sx={{bgcolor: 'transparent' }}>
<InstagramIcon style={{ color: orange[500] }} /></Avatar>




</Stack>

        </Grid>
        <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant="h6">

          </Typography>
        </Grid>
      </Grid>


    </div>
  )
}

export default Footer