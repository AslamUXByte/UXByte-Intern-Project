import React from 'react';
import { Typography, Grid, Paper, Avatar,Box } from '@mui/material';
import iphoneImage from './iphone1.png';
import headphoneImage from './headphone2.png'; // Import the image
import iwatch from './iwatch.png';
import airpodes from './airpods.png';
import nikeairmax from './monitor1.png';
import Applemac from './mac1.png';

const HotDeal = () => {
  return (
    <Paper elevation={3} sx={{ p: 2, bgcolor: 'background.paper', width: '85%', margin: 'auto',boxShadow:0 }}>
      <Grid container spacing={0} alignItems="center">
        <Grid item xs={0}>
          <Avatar sx={{ bgcolor: 'white' }}>🔥</Avatar>
        </Grid>
        <Grid item xs={0}>
          <Typography sx={{ color: '#212B36', fontSize: '30px', fontWeight: '600', marginRight: '30px' }}>
            Hotdeals
          </Typography>
        </Grid>
        <Grid item xs={0}>
          <Typography variant="h5" fontWeight="bold" color="error">01:29:33</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={0} sx={{ overflowX: 'visible' }}>
        <Grid item xs={3} sm={4} md={2}>
          <Paper sx={{ p: 2, bgcolor: 'zinc.100', borderRadius: '12px', boxShadow: 4, height: '80%',width: '150px',":hover":{border:'2px solid black',borderColor: 'black'} }}>
            <Box sx={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
            <img style={{ width: '50%' }} src={iphoneImage} alt="Apple iPhone" />
            <Typography variant="body1" fontWeight="none">Apple iPhone</Typography>
            <Typography variant="body1" color="orange" gutterBottom>$83.74</Typography>
            <Typography variant="body2" color="zinc.500">497 Sold</Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={3} sm={4} md={2}>
          <Paper sx={{ p: 2, bgcolor: 'zinc.100', borderRadius: '12px', boxShadow: 4, height: '80%',width: '150px',":hover":{border:'2px solid black',borderColor: 'black'} }}>
          <Box sx={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
            <img style={{ width: '50%' }} src={headphoneImage} alt="Samsung Galaxy" />
            <Typography variant="body1" fontWeight="none">Samsung Galaxy</Typography>
            <Typography variant="body1" color="orange" gutterBottom>$99.99</Typography>
            <Typography variant="body2" color="zinc.500">312 Sold</Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={3} sm={4} md={2}>
          <Paper sx={{ p: 2, bgcolor: 'zinc.100', borderRadius: '12px', boxShadow: '100%', height: '80%',width: '150px',":hover":{border:'2px solid black',borderColor: 'black'} }}>
          <Box sx={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
            <img style={{ width: '50%' }} src={iwatch} alt="Apple Iwatch" />
            <Typography variant="body1" fontWeight="none">Apple Iwatch</Typography>
            <Typography variant="body1" color="orange" gutterBottom>$93.99</Typography>
            <Typography variant="body2" color="zinc.500">389 Sold</Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={3} sm={4} md={2}>
          <Paper sx={{ p: 2, bgcolor: 'zinc.100', borderRadius: '12px', boxShadow: '100%', height: '80%',width: '150px',":hover":{border:'2px solid black',borderColor: 'black'} }}>
          <Box sx={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
            <img style={{ width: '50%' }} src={airpodes} alt="Apple Iwatch" />
            <Typography variant="body1" fontWeight="none">Adidas Ultraboost</Typography>
            <Typography variant="body1" color="orange" gutterBottom>$78.99</Typography>
            <Typography variant="body2" color="zinc.500">234 Sold</Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={3} sm={4} md={2}>
          <Paper sx={{ p: 2, bgcolor: 'zinc.100', borderRadius: '12px', boxShadow: '100%', height: '80%',width: '150px',":hover":{border:'2px solid black',borderColor: 'black'} }}>
          <Box sx={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
            <img style={{ width: '50%' }} src={nikeairmax} alt="Nike Air Max" />
            <Typography variant="body1" fontWeight="none">Nike Air Max</Typography>
            <Typography variant="body1" color="orange" gutterBottom>$568.99</Typography>
            <Typography variant="body2" color="zinc.500">256 Sold</Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={3} sm={4} md={2}>
          <Paper sx={{ p: 2, bgcolor: 'zinc.100', borderRadius: '12px', boxShadow: '100%', height: '80%',width: '150px',":hover":{border:'2px solid black',borderColor: 'black'} }}>
          <Box sx={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
            <img style={{ width: '50%' }} src={Applemac} alt="Apple mac" />
            <Typography variant="body1" fontWeight="none">Apple Mac</Typography>
            <Typography variant="body1" color="orange" gutterBottom>$89.99</Typography>
            <Typography variant="body2" color="zinc.500">166 Sold</Typography>
            </Box>
          </Paper>
        </Grid>
        
      </Grid>
    </Paper>
  );
};

export default HotDeal;

