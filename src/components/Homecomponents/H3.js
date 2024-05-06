import { Box, Button, CircularProgress, Grid, Typography} from '@mui/material'
import React from 'react'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import AddIcon from '@mui/icons-material/Add';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';








const H3 = () => {
  return (
    <div>
        <div>
    <Grid container spacing={2} sx={{  textAlign: 'center', height: '80vh',marginTop:'100px',justifyContent:'space-evenly' }}>
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
          INTERFACE STARTER KIT
        </Typography>

        <Typography variant="h6" style={{ color: '#212B36', fontSize: '3.15rem', fontWeight: '700', lineHeight: '1.25', fontFamily: "'__Barlow_92d964','__Barlow_Fallback_92d964',Helvetica,Arial,sans-serif" , paddingLeft: '120px', paddingTop:'30px' }}>
        Flexible Components
          <br/> <br/>
          <div>
          <p class="css">Pre-set components are easy to customize and use. We collected most popular elements. Menu, sliders, buttons, inputs etc. are all here. Just dive in!</p>
          </div>
          
          <Button variant="outlined" href="https://zone-ui.vercel.app/components/" size="medium" sx={{
            backgroundColor: 'transparent',
            color: '#212B36',
            fontWeight: 700,
            borderColor:'#DCDCDC',


            textTransform: 'capitalize',
            '&:hover': {
              backgroundColor: '#DCDCDC',
borderColor:'#212B36',
            },
          }}>
            

            Browse Components   <br/><ArrowForwardIosOutlinedIcon sx={{fontSize:'small'}}></ArrowForwardIosOutlinedIcon>
          </Button>
        
        </Typography>
      </Grid>
      <Grid
      item
      xs={5}
      sx={{
        alignItems: 'center',
        border: '1px dotted #DCDCDC',
        borderRadius: '20px',
        width: '80%', // Adjust the width as needed
        height: '800px', // Adjust the height as needed
      }}
    >
        <Grid  sx={{display:'flex',alignItems:'center',padding:'25px',justifyContent:'space-Between'}}>
      <Typography variant="h6">
      <Button variant="" href="" size="large" sx={{
            backgroundColor: '#FF4500',
            color: 'white',
            fontWeight: 700,
            fontSize: '1rem',
            borderRadius:'5px',
            height:'50px',


            textTransform: 'capitalize',
            '&:hover': {
              backgroundColor: '#B22222',
            },
          }}>
            

          <AddIcon sx={{fontSize:'medium'}}></AddIcon>    Add to Cart  
          </Button>
          <Button variant="" href="" size="large" sx={{
            backgroundColor: '#212B36',
            color: 'white',
            fontWeight: 700,
            fontSize: '1rem',
            borderRadius:'45px',
            height:'50px',


            textTransform: 'capitalize',
            '&:hover': {
              backgroundColor: '#708090',
            },
          }}>
            

          <CloudUploadOutlinedIcon sx={{fontSize:'large'}}></CloudUploadOutlinedIcon>    Upload 
          </Button>

          <Button variant="" href="" size="large" sx={{
            backgroundColor: '#00CED1',
            color: 'white',
            fontWeight: 700,
            fontSize: '1rem',
            borderRadius:'50%',
            height:'60px',


            textTransform: 'capitalize',
            '&:hover': {
              backgroundColor: '#4682B4',
            },
          }}>
            

          <SubscriptionsOutlinedIcon sx={{fontSize:'large'}}></SubscriptionsOutlinedIcon>
          </Button>
      <CircularProgress variant="determinate" value="50" />
         </Typography>
      </Grid>
    </Grid>




    </Grid>    


  </div>


    </div>
  )
}

export default H3