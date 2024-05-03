import { Box, Grid, Typography } from '@mui/material'
import React from 'react'


const Home = () => {
  return (
    <div>
        <Grid sx={{padding:2}}>
            <Box>
            <Typography sx={{ fontSize:40,fontWeight:500}}>
Create Your Website today with Zone
            </Typography>
            </Box>
        </Grid>
    </div>
  )
}

export default Home