import React from 'react'
import { Box, Grid, Typography,Button,LinearProgress, } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';

const reviewsData = [
  { star: 5, count: 5211 },
  { star: 4, count: 2440 },
  { star: 3, count: 523 },
  { star: 2, count: 423 },
  { star: 1, count: 80 },
];

const Star = () => {
  return (
    <div>
            <Box
      sx={{
        width: '100%', // Make the box responsive
        margin: '15px auto', // Center the box horizontally
        backgroundColor: '#F5FFFA',
       height:'320px',
        padding: '20px', // Add padding for better spacing
        marginTop:'100px'
      }}
    >
         <Box sx={{ p: { xs: 2, sm: 4 }, borderRadius: 2, maxWidth: 600, mx: 'auto' }}>
      <Grid sx={{justifyContent:'left',display:'flex',flexDirection:'row'}} container  spacing={5}>
        <Grid item xs={12} sm={4}>
          <Typography sx={{fontWeight:"600"}} variant="h4" color="#212B36" gutterBottom>
            Reviews
          </Typography>
          <Typography sx={{fontWeight:"600"}}  variant="h3" color="#212B36" component="div">
            4.1
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {[...Array(5)].map((_, index) => (
              <StarIcon key={index} sx={{ color: index < 4 ? '#000' : '#bbb' }} />
            ))}
          </Box>
          <Typography variant="body2" color="textSecondary" component="div">
            123.46k reviews
          </Typography>
          <Button variant='contained' sx={{
                        mt: 3, bgcolor: '#212B36', fontWeight: 700,
                        fontSize: '1rem',
                        borderRadius: '5px', textTransform: 'capitalize', '&:hover': {
                          backgroundColor: '#212B36', opacity: '.7'
                        },
                      }}><BorderColorOutlinedIcon></BorderColorOutlinedIcon>Write Reviews</Button>
        </Grid>
        <Grid  item xs={12} sm={8}>
          {reviewsData.map((item) => (
            <Box key={item.star} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Typography color="#212B36" variant="body2" sx={{ mr: 1 }}>
                {item.star}
              </Typography>
              <StarBorderIcon fontSize="small" sx={{ mr: 1 }} />
              <LinearProgress
                variant="determinate"
                value={(item.count / reviewsData[0].count) * 100}
                sx={{ flexGrow: 1, mr: 1, bgcolor: '#E0E0E0', '& .MuiLinearProgress-bar': { bgcolor: '#000' } }}
              />
              <Typography  variant="body2" color="textSecondary">
                {item.count.toLocaleString()}
              </Typography>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
    </Box>

    </div>
  )
}

export default Star