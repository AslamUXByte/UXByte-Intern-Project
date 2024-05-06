import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const Zonekit = () => {
  return (
    <Box
      sx={{
        width: '70%', // Make the box responsive
        margin: '15px auto', // Center the box horizontally
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        padding: '20px', // Add padding for better spacing
        marginTop:'100px'
      }}
    >
      <img
        src="https://zone-ui.vercel.app/assets/images/home/new_start.png"
        alt="Image Description"
        style={{ width: '100%', maxWidth: '900px', height: 'auto' }} // Make the image responsive
      />
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        marginTop={2} // Add margin top for better spacing
      >
        <Typography
          variant="subtitle1" // Use Material-UI variant for consistent typography
          sx={{
            fontWeight: 700,
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            opacity: 0.48,
            fontFamily: "'__Public_Sans_f258fb', '__Public_Sans_Fallback_f258fb', Helvetica, Arial, sans-serif"
          }}
        >
          NEW START
        </Typography>
      </Grid>
      
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        marginTop={2} // Add margin top for better spacing
      >
        <Typography
          variant="h2" // Use Material-UI variant for consistent typography
          sx={{
            fontWeight: 700,
            fontSize: '2.4rem',
            textTransform: 'capitalize',
            color: '#212B36',
            fontFamily: "'__Public_Sans_f258fb', '__Public_Sans_Fallback_f258fb', Helvetica, Arial, sans-serif"
          }}
        >
          The <Box component="span" sx={{ color: '#FF4500' }}>ZONE</Box> UI Kit
        </Typography>
      </Grid>

      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        marginTop={2} // Add margin top for better spacing
      >
        <Typography
          variant="body1" // Use Material-UI variant for consistent typography
          sx={{
            fontWeight: 500,
            fontSize: '1rem',
            textTransform: 'capitalize',
            opacity: 0.48,
            fontFamily: "'__Public_Sans_f258fb', '__Public_Sans_Fallback_f258fb', Helvetica, Arial, sans-serif"
          }}
        >
            Modern ui kit to save your time, boost your creativity. Neat and super  
            <Typography component="span" sx={{ display: 'block', marginLeft: '0', textAlign: 'center' }}>stylish layout ready to help with your projects</Typography>
        </Typography>
      </Grid>
    </Box>
  )
}

export default Zonekit
