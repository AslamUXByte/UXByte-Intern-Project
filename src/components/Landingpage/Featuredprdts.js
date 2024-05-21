import React from 'react';
import { Typography, Grid, Paper, Box,Avatar } from '@mui/material';
import iphoneImage from './iphone1.png';

import monitor from './monitor1.png';
import mob from './mobile.png';
import con from './controller.png';
import ms from './ms.png'
import tesla from './tesla.png'


const Featuredprdts = () => {
  return (
    <div>
      <Grid container  sx={{ textAlign: 'center', width: '1200px', margin: '60px auto',justifyContent:'center' }}>
        <Grid item xs={12}>
          <Typography sx={{ color: '#212B36', fontSize: '30px', fontWeight: '600',textAlign:'left' }}>
            Featured Products
          </Typography>
        </Grid>
        <Grid container  sx={{ textAlign: 'center', width: '1200px', margin: '60px auto',justifyContent:'center',gap:10 }}>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper sx={{ p: 2, bgcolor: '#FAEBD7', borderRadius: '12px', height: '500px', width: '320px', mx: 'auto', ":hover": { bgcolor: "#E9967A" } }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
              <img style={{ width: '250px', height: '250px', objectFit: 'cover' }} src={iphoneImage} alt="Apple iPhone" />
              <br />
              <Typography variant="body1" color="#CD5C5C" fontWeight="bold">Apple iPhone</Typography>
              <br />
              <Typography variant="h6" color="#800000">From $83.74</Typography>
              <br />
              <Typography variant="h4" fontWeight="bold" color="black">01:29:33:28</Typography>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper sx={{ p: 2, bgcolor: '#E6E6FA', borderRadius: '12px', height: '500px', width: '320px', mx: 'auto', ":hover": { bgcolor: "cubic-bezier(0.4, 0, 1)", } }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
              <img style={{ width: '250px', height: '250px', objectFit: 'cover' }} src={monitor} alt="Nike Air Max" />
              <br />
              <Typography variant="body1" color="#7B68EE" fontWeight="bold">Nike Air Max</Typography>
              <br />
              <Typography variant="h6" color="#6A5ACD">From $83.74</Typography>
              <br />
              <Typography variant="h4" fontWeight="bold" color="black">01:29:33:10</Typography>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
              <Box variant="outlined" sx={{textAlign:'left', width: '150px', height: '200px', border: '1px solid #D3D3D3', borderRadius: '10px', '&:hover': { bgcolor: '#F5FFFA' }, mx:'auto',padding:'3px' }}>
                  <Avatar sx={{ bgcolor: '#F5FFFA', width: '120px', height: '120px' }} variant="rounded" src={mob} />
                  <Typography sx={{ color: '#212B36', opacity: '.8', fontSize: '14px', fontWeight: '500', marginTop: '8px', fontFamily: "'Poppins', sans-serif" }}>
                    Sony PlayStation
                  </Typography>
                  <Typography sx={{ color: '#212B36', opacity: '.9', fontSize: '16px', fontWeight: '500', marginTop: '8px', fontFamily: "'Poppins', sans-serif" }}>
                    $52.71
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6}>
              <Box variant="outlined" sx={{textAlign:'left', width: '150px', height: '200px', border: '1px solid #D3D3D3', borderRadius: '10px', '&:hover': { bgcolor: '#F5FFFA' }, mx:'auto',padding:'3px' }}>
                  <Avatar sx={{ bgcolor: '#F5FFFA', width: '120px', height: '120px' }} variant="rounded" src={ms} />
                  <Typography sx={{ color: '#212B36', opacity: '.8', fontSize: '14px', fontWeight: '500', marginTop: '8px', fontFamily: "'Poppins', sans-serif" }}>
                    Microsoft Surface
                  </Typography>
                  <Typography sx={{ color: '#212B36', opacity: '.9', fontSize: '16px', fontWeight: '500', marginTop: '8px', fontFamily: "'Poppins', sans-serif" }}>
                    $24.18
                  </Typography>
                </Box>
              </Grid>
              <br/>
              <Grid item xs={6}>
              <Box variant="outlined" sx={{textAlign:'left', width: '150px', height: '200px', border: '1px solid #D3D3D3', borderRadius: '10px', '&:hover': { bgcolor: '#F5FFFA' }, mx:'auto',padding:'3px' }}>
                  <Avatar sx={{ bgcolor: '#F5FFFA', width: '120px', height: '120px' }} variant="rounded" src={tesla} />
                  <Typography sx={{ color: '#212B36', opacity: '.8', fontSize: '14px', fontWeight: '500', marginTop: '8px', fontFamily: "'Poppins', sans-serif" }}>
                   Tesla Model
                  </Typography>
                  <Typography sx={{ color: '#212B36', opacity: '.9', fontSize: '16px', fontWeight: '500', marginTop: '8px', fontFamily: "'Poppins', sans-serif" }}>
                    $52.71
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box variant="outlined" sx={{textAlign:'left', width: '150px', height: '200px', border: '1px solid #D3D3D3', borderRadius: '10px', '&:hover': { bgcolor: '#F5FFFA' }, mx:'auto',padding:'3px' }}>
                  <Avatar sx={{ bgcolor: '#F5FFFA', width: '100px', height: '100px' }} variant="rounded" src={con} />
                  <Typography sx={{ color: '#212B36', opacity: '.8', fontSize: '14px', fontWeight: '500', marginTop: '8px', fontFamily: "'Poppins', sans-serif" }}>
                    Amazon Echo
                  </Typography>
                  <Typography sx={{ color: '#212B36', opacity: '.9', fontSize: '16px', fontWeight: '500', marginTop: '8px', fontFamily: "'Poppins', sans-serif" }}>
                    $24.18
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>        </Grid>
</Grid>
      </Grid>
    </div>
  )
}


export default Featuredprdts;
