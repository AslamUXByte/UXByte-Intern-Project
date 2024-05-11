import React from 'react';
import { Typography, Grid, Paper, Avatar,Box } from '@mui/material';
import iphoneImage from './iphone1.png';
import headphoneImage from './headphone2.png'; // Import the image
import iwatch from './iwatch.png';
import airpodes from './airpods.png';

const HotDeal = () => {
  return (
    <Paper elevation={3} sx={{ p: 3, bgcolor: 'background.paper' }}>
      <Grid container alignItems="center" justifyContent="space-between" sx={{ mb: 4 }}>
        <Grid item container alignItems="center" spacing={2}>
         <Typography variant="h5" fontWeight="bold">Hot Deal Today</Typography>
          <Avatar sx={{ bgcolor: 'white' }}>🔥</Avatar>
          <Typography variant="h5" fontWeight="bold" color="error">01:29:33</Typography>
        </Grid>
       </Grid>
      <Grid container spacing={0} sx={{ overflowX: 'visible' }}>
        <Grid item xs={12} sm={6} md={2}>
          <Paper sx={{ p: 2, bgcolor: 'zinc.100', borderRadius: '12px', boxShadow: 4, height: '80%',width: '200px' }}>
            <Box sx={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
            <img style={{ width: '50%' }} src={iphoneImage} alt="Apple iPhone" />
            <Typography variant="body1" fontWeight="none">Apple iPhone</Typography>
            <Typography variant="body1" color="orange" gutterBottom>$83.74</Typography>
            <Typography variant="body2" color="zinc.500">497 Sold</Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <Paper sx={{ p: 2, bgcolor: 'zinc.100', borderRadius: '12px', boxShadow: '100%', height: '80%',width: '200px' }}>
          <Box sx={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
            <img style={{ width: '50%' }} src={headphoneImage} alt="Samsung Galaxy" />
            <Typography variant="body1" fontWeight="none">Samsung Galaxy</Typography>
            <Typography variant="body1" color="orange" gutterBottom>$99.99</Typography>
            <Typography variant="body2" color="zinc.500">312 Sold</Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <Paper sx={{ p: 2, bgcolor: 'zinc.100', borderRadius: '12px', boxShadow: '100%', height: '80%',width: '200px' }}>
          <Box sx={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
            <img style={{ width: '50%' }} src={iwatch} alt="Apple Iwatch" />
            <Typography variant="body1" fontWeight="none">Apple Iwatch</Typography>
            <Typography variant="body1" color="orange" gutterBottom>$93.99</Typography>
            <Typography variant="body2" color="zinc.500">389 Sold</Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ p: 2, bgcolor: 'zinc.100', borderRadius: '12px', boxShadow: '100%', height: '80%',width: '200px' }}>
          <Box sx={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
            <img style={{ width: '50%' }} src={airpodes} alt="Apple Iwatch" />
            <Typography variant="body1" fontWeight="none">Adidas Ultraboost</Typography>
            <Typography variant="body1" color="orange" gutterBottom>$78.99</Typography>
            <Typography variant="body2" color="zinc.500">234 Sold</Typography>
            </Box>
          </Paper>
        </Grid>
        
      </Grid>
    </Paper>
  );
};

export default HotDeal;

