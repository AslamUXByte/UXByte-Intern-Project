import { Box, Container, Grid, Typography,Button,IconButton,Stack,Avatar} from '@mui/material'
import React from 'react'
import { Image } from '@mui/material';



const Home = () => {
  return (
    <div>
    <Grid container spacing={2} sx={{ backgroundColor: '#F5F5F5', textAlign: 'center', height: '100vh' }}>
      <Grid item xs={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant="h6" style={{ color: '#212B36', fontSize: '3.625rem', fontWeight: '700', lineHeight: '1.25', fontFamily: "'__Barlow_92d964','__Barlow_Fallback_92d964',Helvetica,Arial,sans-serif" , paddingLeft: '120px',textAlign:'left',paddingBottom:'50px' }}>
          Create Your{'\n'}
          Website Today{'\n'}
          with  <span style={{ color: '#FF4500' }}>ZONE</span> 
<br/> <br/>
          <p class="css">The ZONE is built on top of MUI, a powerful library that provides flexible, customizable, and easy-to-use components.</p>
        
          <Button variant="" href="https://www.figma.com/file/Zam9QBLhV4pZf5xtNs0Lf8/[Preview]-Zone_Web.v2.3.0?type=design&node-id=59-680507&mode=design"  sx={{
        backgroundColor: '#212B36',
        color: 'white',
        textTransform: 'capitalize',
        '&:hover': {
          backgroundColor: '#708090',
        },
      }}>
        Figma Workspace
     </Button>
     <br/><br/>
<div  class=" css-1">
      <span class=" css-2">AVAILABLE FOR</span>
  
      <div class=" css-3">
      <Avatar  sx={{ width: 28, height: 28 }} alt="Remy Sharp" src="https://www.svgrepo.com/show/373703/js.svg" />
      <Avatar  sx={{ width: 28, height: 28 }} alt="Travis Howard" src="https://www.svgrepo.com/show/374144/typescript.svg" />
      <Avatar  sx={{ width: 23, height: 23 }} alt="Cindy Baker" src="https://cdn.iconscout.com/icon/free/png-256/free-figma-3628771-3030133.png" />
      <Avatar  sx={{ width: 23, height: 23 }} alt="Cindy Baker" src="https://www.svgrepo.com/show/354113/nextjs-icon.svg" />
      <Avatar  sx={{ width: 23, height: 23 }} alt="Cindy Baker" src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg" />

                </div></div>
        </Typography>
      </Grid>
      <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant="h6">
        <img  style={{ maxWidth: '100%', height: '100%', paddingBottom:'50px' }}src="https://zone-ui.vercel.app/assets/images/home/home_hero.png" alt="Image Description" />        </Typography>
      </Grid>
    </Grid>
  
  </div>
)
}
export default Home