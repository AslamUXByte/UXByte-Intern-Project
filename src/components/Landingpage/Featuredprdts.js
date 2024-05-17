import React from 'react';
import { Typography, Grid, Paper, Box } from '@mui/material';
import iphoneImage from './iphone1.png';
import headphoneImage from './headphone2.png'; 
import iwatch from './iwatch.png';
import shoes from './shoe1.png';
import jacket from './jacket1.png';
import controller from './controller.png';

const Featuredprdts = () => {
  return (
    <Grid container spacing={2} direction="row">
      <Grid item xs={8}>
        <Paper elevation={3} sx={{ p: 2, bgcolor: 'background.paper', margin: '50px', width: '850px', height: '700px', boxShadow: 4 }}>
          <Grid container spacing={2} direction="row">
            <Grid item xs={2}>
              <Typography gutterBottom variant='h6' sx={{ color: '#212B36', fontSize: '30px', fontWeight: '600' }}>
                FeaturedProducts
              </Typography>
            </Grid>
          </Grid>
          <Grid container item xs={20} spacing={2} alignItems="row">
            <Grid item xs={6}>
              <Paper sx={{ p: 2, bgcolor: '#e5b75c', borderRadius: '12px', boxShadow: 4, height: '600px', width: '370px', ":hover": { border: '2px solid black', borderColor: 'black' } }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                  <img style={{ width: '370px', height: '400px' }} src={iphoneImage} alt="Apple iPhone" />
                  <Typography variant="body1" fontWeight={80}>Apple iPhone</Typography>
                  <Typography variant="h6" color="#d50000"> From $83.74</Typography>
                  <Typography variant="h4" fontWeight="bold" color="black">01:29:33</Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper sx={{ p: 2, bgcolor: '#8b4fb6', borderRadius: '12px', boxShadow: 4, height: '600px', width: '370px', ":hover": { border: '2px solid black', borderColor: 'black' } }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                  <img style={{ width: '370px', height: '400px' }} src={headphoneImage} alt="Samsung headphones" />
                  <Typography variant="body1" fontWeight={80}>Samsung headphones</Typography>
                  <Typography variant="h6" color="#470886"> From $83.74</Typography>
                  <Typography variant="h4" fontWeight="bold" color="black">01:29:33</Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={3.5} sm={4} md={2}>
              <Paper sx={{ p: 2, bgcolor: 'zinc.100', borderRadius: '12px', boxShadow: 4, height: '220px', width: '200px', ":hover": { border: '2px solid black', borderColor: 'black' } }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                  <img style={{ width: '150px' }} src={iwatch} alt="Apple Iwatch" />
                  <Typography variant="body1" fontWeight="none">Apple Iwatch</Typography>
                  <Typography variant="body1" color="orange">$93.99</Typography>
                  <Typography variant="body2" color="zinc.500">389 Sold</Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={3.5} sm={4} md={2}>
              <Paper sx={{ p: 2, bgcolor: 'zinc.100', borderRadius: '12px', boxShadow: 4, height: '220px', width: '200px', ":hover": { border: '2px solid black', borderColor: 'black' } }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                  <img style={{ width: '150px' }} src={shoes} alt="shoes" />
                  <Typography variant="body1" fontWeight="none">Shoes</Typography>
                  <Typography variant="body1" color="orange">$93.99</Typography>
                  <Typography variant="body2" color="zinc.500">389 Sold</Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={3.5} sm={4} md={2}>
              <Paper sx={{ p: 2, bgcolor: 'zinc.100', borderRadius: '12px', boxShadow: 4, height: '220px', width: '200px', ":hover": { border: '2px solid black', borderColor: 'black' } }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                  <img style={{ width: '150px' }} src={jacket} alt="jacket" />
                  <Typography variant="body1" fontWeight="none">Jacket</Typography>
                  <Typography variant="body1" color="orange">$95.99</Typography>
                  <Typography variant="body2" color="zinc.500">357 Sold</Typography>
                </Box>
              </Paper>
            </Grid>
           
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={1}>
        <Paper elevation={3} sx={{ p: 2, bgcolor: 'background.paper', marginTop:'50px',marginRight:'1px',marginLeft:'1px', width: '500px', height: '700px', boxShadow: 4 }}>
          
          
          <Box sx={{ mt: 8 }}>
          <Paper sx={{ p: 2, bgcolor: 'zinc.100', borderRadius: '12px', boxShadow: 4, height: '220px', width: '200px', ":hover": { border: '2px solid black', borderColor: 'black' } }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                  <img style={{ width: '150px' }} src={controller} alt="Controller" />
                  <Typography variant="body1" fontWeight="none">Controller</Typography>
                  <Typography variant="body1" color="orange">$45.99</Typography>
                  <Typography variant="body2" color="zinc.500">457 Sold</Typography>
                </Box>
              </Paper>
              <Grid item xs={15} sm={10} md={6}>
              <Paper sx={{ p: 2, bgcolor: 'zinc.100', borderRadius: '12px', boxShadow: 4, height: '220px', width: '200px', ":hover": { border: '2px solid black', borderColor: 'black' } }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                  <img style={{ width: '150px' }} src={jacket} alt="jacket" />
                  <Typography variant="body1" fontWeight="none">Jacket</Typography>
                  <Typography variant="body1" color="orange">$95.99</Typography>
                  <Typography variant="body2" color="zinc.500">357 Sold</Typography>
                </Box>
              </Paper>
            </Grid>
          
            
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Featuredprdts;
