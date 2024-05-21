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


export default Featuredprdts;
