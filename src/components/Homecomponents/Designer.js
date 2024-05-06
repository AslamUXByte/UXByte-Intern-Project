import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';





const Designer = () => {
  return (
    <div>
        <Grid container spacing={2} sx={{
        textAlign: 'center',
        height: '50vh',
        marginTop: '30px',
        backgroundImage: 'url("https://zone-ui.vercel.app/assets/images/home/for_designer.jpg")', // Replace "path_to_your_image.jpg" with the path to your image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>

<Grid
      container
      spacing={2}
      sx={{
        backgroundColor: 'rgba(22, 28, 36, 0.8)',
        textAlign: 'center',
        height: '50vh',
        marginTop: '1px',
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
        display:'block'
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{
            color:'#DCDCDC',
            marginTop:'70px',
          fontWeight: 700,
          fontSize: '0.75rem',
          textTransform: 'uppercase',
          opacity: 0.48,
          fontFamily: "'__Public_Sans_f258fb', '__Public_Sans_Fallback_f258fb', Helvetica, Arial, sans-serif",
        }}
      >
        PROFESSIONAL KIT
      </Typography>
      <Typography variant="h6" style={{ color: 'white', fontSize: '3rem', fontWeight: '700', lineHeight: '1.25', fontFamily: "'__Barlow_92d964','__Barlow_Fallback_92d964',Helvetica,Arial,sans-serif" , paddingTop:'30px' }}>
      For Designer
        </Typography>
<br/><br/>
        <Button variant="" href="https://www.figma.com/file/Zam9QBLhV4pZf5xtNs0Lf8/[Preview]-Zone_Web.v2.3.0?type=design&node-id=59-680507&mode=design"  sx={{
            backgroundColor: '#FF4500',
            color: 'white',
            textTransform: 'capitalize',
            '&:hover': {
              backgroundColor: '#B22222',
            },
          }}>
            Figma Workspace<br/><LaunchOutlinedIcon></LaunchOutlinedIcon>
          </Button>

    </Grid>


      </Grid>
    </div>
  )
}

export default Designer