import { Box, Button, CircularProgress, Grid, Typography} from '@mui/material'
import React from 'react'
import MonitorSharpIcon from '@mui/icons-material/MonitorSharp';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import TuneSharpIcon from '@mui/icons-material/TuneSharp';
import ExposureSharpIcon from '@mui/icons-material/ExposureSharp';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import FontDownloadOutlinedIcon from '@mui/icons-material/FontDownloadOutlined';
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import UpdateOutlinedIcon from '@mui/icons-material/UpdateOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';


const Feature = () => {
  return (
    <div>
        <div>
    <Grid container spacing={2} sx={{  textAlign: 'center', height: '80vh',marginTop:'250px',justifyContent:'space-evenly' }}>
      <Grid item xs={5} sx={{  justifyContent: 'center', alignItems: 'center', textAlign: 'left' }}>
      <Typography
          variant="subtitle1" 
          sx={{
            marginLeft:15,
            fontWeight: 700,
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            opacity: 0.48,
            fontFamily: "'__Public_Sans_f258fb', '__Public_Sans_Fallback_f258fb', Helvetica, Arial, sans-serif"
          }}
        >
          FEATURE HIGHLIGHTS
        </Typography>

        <Typography variant="h6" style={{ color: '#212B36', fontSize: '3.15rem', fontWeight: '700', lineHeight: '1.25', fontFamily: "'__Barlow_92d964','__Barlow_Fallback_92d964',Helvetica,Arial,sans-serif" , paddingLeft: '120px', paddingTop:'30px' }}>
        Have Everything You Need
          <br/> <br/>
          <div>
          <p class="css">Let's see what makes our theme super powerful and user-friendly!</p>
          </div>
          
        
        </Typography>
      </Grid>
      <Grid
      item
      xs={5}
      sx={{
        alignItems: 'center',
        borderRadius: '20px',
        width: '80%', // Adjust the width as needed
        height: '800px', // Adjust the height as needed
      }}
    >
        <Grid  sx={{display:'flex',alignItems:'center',padding:'25px',justifyContent:'space-Between'}}>
        <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={4}> {/* Each item takes 4 columns on extra small screens */}
      <MonitorSharpIcon sx={{fontSize:'40px',color:'#212B36'}}></MonitorSharpIcon>
      <br/>
      <Typography sx={{color:'#212B36',fontSize: '0.875rem'}}>5 Prebuilt Websites</Typography>
      </Grid>
      <br/> <br/>
      <Grid item xs={4}> {/* Each item takes 4 columns on extra small screens */}
      <AutoStoriesOutlinedIcon sx={{fontSize:'40px',color:'#212B36'}}></AutoStoriesOutlinedIcon>
      <br/>
      <Typography sx={{color:'#212B36',fontSize: '0.875rem'}}>60+ Demopages</Typography>
      <br/><br/>
      </Grid>
      <Grid item xs={4}> {/* Each item takes 4 columns on extra small screens */}
      <TuneSharpIcon sx={{fontSize:'40px',color:'#212B36'}}></TuneSharpIcon>
      <br/>
      <Typography sx={{color:'#212B36',fontSize: '0.875rem'}}>Easy to customize</Typography>
      <br/><br/>
      </Grid>
      <Grid item xs={4}> {/* Each item takes 4 columns on extra small screens */}
      <ExposureSharpIcon sx={{fontSize:'40px',color:'#212B36'}}></ExposureSharpIcon>
      <br/>
      <Typography sx={{color:'#212B36',fontSize: '0.875rem'}}>Color Presets</Typography>
      <br/><br/>
      </Grid>
      <Grid item xs={4}> {/* Each item takes 4 columns on extra small screens */}
      <NightlightOutlinedIcon sx={{fontSize:'40px',color:'#212B36'}}></NightlightOutlinedIcon>
      <br/>
      <Typography sx={{color:'#212B36',fontSize: '0.875rem'}}>Dark mode</Typography>
      <br/><br/>
      </Grid>
      <Grid item xs={4}> {/* Each item takes 4 columns on extra small screens */}
     < FontDownloadOutlinedIcon sx={{fontSize:'40px',color:'#212B36'}}></FontDownloadOutlinedIcon>      <br/>
      <Typography sx={{color:'#212B36',fontSize: '0.875rem'}}>Google Fonts</Typography>
        <br/>
      <br/><br/>
      </Grid>
      <Grid item xs={4}> {/* Each item takes 4 columns on extra small screens */}
      <i class="fa-brands fa-figma fa-2xl" ></i>
        <br/>
        
      <Typography sx={{color:'#212B36',fontSize: '0.875rem'}}>Figma Design</Typography>
      <br/><br/>
      </Grid>
      <Grid item xs={4}> {/* Each item takes 4 columns on extra small screens */}
      <DevicesOutlinedIcon sx={{fontSize:'40px',color:'#212B36'}}></DevicesOutlinedIcon>
      <br/>
      <Typography sx={{color:'#212B36',fontSize: '0.875rem'}}>Fully Responsive</Typography>
      <br/><br/>
      </Grid>
      <Grid item xs={4}> {/* Each item takes 4 columns on extra small screens */}
      <DescriptionOutlinedIcon sx={{fontSize:'40px',color:'#212B36'}}></DescriptionOutlinedIcon>
      <br/>
      <Typography sx={{color:'#212B36',fontSize: '0.875rem'}}>Mega menu</Typography>
      <br/><br/>
      </Grid>
      <Grid item xs={4}> {/* Each item takes 4 columns on extra small screens */}
      <FileCopyOutlinedIcon sx={{fontSize:'40px',color:'#212B36'}}></FileCopyOutlinedIcon>
      <br/>
      <Typography sx={{color:'#212B36',fontSize: '0.875rem'}}>Clean Markup</Typography>
      <br/><br/>


      </Grid>
      <Grid item xs={4}> {/* Each item takes 4 columns on extra small screens */}
      <UpdateOutlinedIcon sx={{fontSize:'40px',color:'#212B36'}}></UpdateOutlinedIcon>
      <br/>
      <Typography sx={{color:'#212B36',fontSize: '0.875rem'}}>Free updates</Typography>
      <br/><br/>


      </Grid>
      <Grid item xs={4}> {/* Each item takes 4 columns on extra small screens */}
      <SupportAgentOutlinedIcon sx={{fontSize:'40px',color:'#212B36'}}></SupportAgentOutlinedIcon>
      <br/>
      <Typography sx={{color:'#212B36',fontSize: '0.875rem'}}>Fast Support</Typography>
      <br/><br/>


      </Grid>
      <Grid item xs={4}> {/* Each item takes 4 columns on extra small screens */}
      <DescriptionOutlinedIcon sx={{fontSize:'40px',color:'#212B36'}}></DescriptionOutlinedIcon>
      <br/>
      <Typography sx={{color:'#212B36',fontSize: '0.875rem'}}>Well Documented</Typography>

      

      </Grid>

      <Grid item xs={4}> {/* Each item takes 4 columns on extra small screens */}
      <DescriptionOutlinedIcon sx={{fontSize:'40px',color:'#212B36'}}></DescriptionOutlinedIcon>
      <br/>
      <Typography sx={{color:'#212B36',fontSize: '0.875rem'}}>Awesome Animation</Typography>



      </Grid>








    </Grid>    </Box>      </Grid>
    </Grid>




    </Grid>    


  </div>


    </div>
  )
}

export default Feature