import React from 'react';
import { Typography, Grid, Paper, Box } from '@mui/material';
import iphoneImage from './iphone1.png';
import headphoneImage from './headphone2.png'; 

const Featuredprdts = () => {
  return (
    <Paper elevation={3} sx={{ p: 2, bgcolor: 'background.paper', margin: '50px', marginLeft: '80px', marginRight: '80px', height: '700px' }}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Typography sx={{ color: '#212B36', fontSize: '30px', fontWeight: '600' }}>
            Featured Products
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3.5}>
          <Paper sx={{ p: 0, bgcolor: '#e5b75c', borderRadius: '12px', boxShadow: 4, height: '600px', width: '370px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
              <img style={{ width: '400px', height: '470px' }} src={iphoneImage} alt="Apple iPhone" />
              <Typography variant="body1" fontWeight={80}>Apple iPhone</Typography>
              <Typography variant="h6" color="#d50000"> From $83.74</Typography>
              <Typography variant="h4" fontWeight="bold" color="black">01:29:33</Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={3.5}>
          <Paper sx={{ p: 0, bgcolor: '#e5b75c', borderRadius: '12px', boxShadow: 4, height: '600px', width: '370px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
              <img style={{ width: '400px', height: '470px' }} src={headphoneImage} alt="Samsung headphones" />
              <Typography variant="body1" fontWeight={80}>Samsung headphones</Typography>
              <Typography variant="h6" color="#d50000"> From $83.74</Typography>
              <Typography variant="h4" fontWeight="bold" color="black">01:29:33</Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Featuredprdts;

