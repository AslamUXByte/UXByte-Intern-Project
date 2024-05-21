import { Avatar, Box, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import iphoneImage from './iphone1.png';
import monitor from './mac1.png';
import laptop from './laptop.png';
import mob from './sony.png'
import ms from './ms.png'
import tesla from './tesla.png'
import con from './controller.png'


const Featuredprdts = () => {
  return (
    <Paper elevation={3} sx={{ p: 2, bgcolor: 'background.paper', margin: '50px', marginLeft: '50px', marginRight: '50px', height: '700px',boxShadow:4 }}>
      <Grid container spacing={2} direction ="row">
        <Grid item xs={2}>
          <Typography gutterBottom variant='h6' sx={{ color: '#212B36', fontSize: '30px', fontWeight: '600' }}>
            Featured Products
          </Typography>
        </Grid>
      </Grid>
      <Grid container item xs={20} spacing={2} alignItems="row">
        <Grid item xs={3.5}>
          <Paper sx={{ p: 0, bgcolor: '#e5b75c', borderRadius: '12px', boxShadow: 4, height: '600px', width: '370px',":hover":{border:'2px solid black',borderColor: 'black'} }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
              <img style={{ width: '370px', height: '400px' }} src={iphoneImage} alt="Apple iPhone" />
              <Typography variant="body1" fontWeight={80}>Apple iPhone</Typography>
              <Typography variant="h6" color="#d50000"> From $83.74</Typography>
              <Typography variant="h4" fontWeight="bold" color="black">01:29:33</Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={3.5}>
          <Paper sx={{ p: 0, bgcolor: '#8b4fb6', borderRadius: '12px', boxShadow: 4, height: '600px', width: '370px',":hover":{border:'2px solid black',borderColor: 'black'} }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
              <img style={{ width: '370px', height: '400px' }} src={headphoneImage} alt="Samsung headphones" />
              <Typography variant="body1" fontWeight={80}>Samsung headphones</Typography>
              <Typography variant="h6" color="#470886"> From $83.74</Typography>
              <Typography variant="h4" fontWeight="bold" color="black">01:29:33</Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={3.5} sm={4} md={2}>
          <Paper sx={{ p: 2, bgcolor: 'zinc.100', borderRadius: '12px', boxShadow: 4, height: '220px',width: '200px',":hover":{border:'2px solid black',borderColor: 'black'} }}>
          <Box sx={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
            <img style={{ width: '150px' }} src={iwatch} alt="Apple Iwatch" />
            <Typography variant="body1" fontWeight="none">Apple Iwatch</Typography>
            <Typography variant="body1" color="orange" >$93.99</Typography>
            <Typography variant="body2" color="zinc.500">389 Sold</Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={3.5} sm={4} md={2}>
          <Paper sx={{ p: 2, bgcolor: 'zinc.100', borderRadius: '12px', boxShadow: 4, height: '220px',width: '200px',":hover":{border:'2px solid black',borderColor: 'black'} }}>
          <Box sx={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
            <img style={{ width: '150px' }} src={shoes} alt="shoes" />
            <Typography variant="body1" fontWeight="none">Shoes</Typography>
            <Typography variant="body1" color="orange" >$93.99</Typography>
            <Typography variant="body2" color="zinc.500">389 Sold</Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={3.5} sm={4} md={2}>
          <Paper sx={{ p: 2, bgcolor: 'zinc.100', borderRadius: '12px', boxShadow: 4, height: '220px',width: '200px',":hover":{border:'2px solid black',borderColor: 'black'} }}>
          <Box sx={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
            <img style={{ width: '150px' }} src={jacket} alt="jacket" />
            <Typography variant="body1" fontWeight="none">Jacket</Typography>
            <Typography variant="body1" color="orange" >$95.99</Typography>
            <Typography variant="body2" color="zinc.500">357 Sold</Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={3.5} sm={4} md={2}>
          <Paper sx={{ p: 2, bgcolor: 'zinc.100', borderRadius: '12px', boxShadow: 4, height: '220px',width: '200px',":hover":{border:'2px solid black',borderColor: 'black'} }}>
          <Box sx={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
            <img style={{ width: '150px' }} src={controller} alt="Controller" />
            <Typography variant="body1" fontWeight="none">Controller</Typography>
            <Typography variant="body1" color="orange" >$45.99</Typography>
            <Typography variant="body2" color="zinc.500">457 Sold</Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Featuredprdts;
