import React from 'react'
import { Typography, Grid, Paper, Avatar,Box } from '@mui/material';
import iphoneImage from './iphone1.png';





const Featuredprdts = () => {
  return (
    <Paper elevation={3} sx={{ p: 2, bgcolor: 'background.paper' }}>
      <Grid container spacing={2} sx={{  textAlign: 'center', height: '50vh', width: '1200px', margin: '60px', marginLeft: '130px' }}>
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', textAlign: 'left' }}>
        <Typography sx={{ color: '#212B36', fontSize: '30px', fontWeight: '600',marginRight:'1000px' }}>
          Featured Products
        </Typography>
      </Grid>
      </Grid>
      <Grid container spacing={10} sx={{ overflowX: 'visible' }}>
        <Grid item xs={6} sm={6} md={4}>
          <Paper sx={{ p: 2, bgcolor: 'zinc.100', borderRadius: '12px', boxShadow: 4, height: '40vh',width: '150px' }}>
            <Box sx={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
            <img style={{ width: '50%' }} src={iphoneImage} alt="Apple iPhone" />
            <Typography variant="body1" fontWeight="none">Apple iPhone</Typography>
            <Typography variant="body1" color="orange" gutterBottom>$83.74</Typography>
            <Typography variant="body2" color="zinc.500">497 Sold</Typography>
            </Box>
          </Paper>
        </Grid>






     </Grid>  
  </Paper>
  )
}

export default Featuredprdts