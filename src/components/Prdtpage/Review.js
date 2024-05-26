import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Divider,Grid } from '@mui/material';

const Review = () => {
  return (
 <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: '100vh' }} // Centers vertically
    >
      <Grid item xs={12} sm={10} md={8} lg={6} xl={4} sx={{ marginLeft: 2 }}>
        <Stack direction="row" spacing={2} alignItems="center" sx={{ padding: 2 }}>
          <Avatar alt="Jayvion Simon" src="/assets/images/avatar/avatar_1.jpg" />
          <Stack>
            <Box sx={{ display: 'flex',flexDirection:'column', alignItems: 'center' }}>
              <Rating
                name="read-only"
                value={5}
                precision={0.5}
                readOnly
                size="small"
                sx={{
                  '& .MuiRating-iconFilled': {
                    color: 'black',
                  },
                  '& .MuiRating-iconHover': {
                    color: 'black',
                  },
                }}
              />
              <Typography variant="body2" sx={{ ml: 1 }}>
                Jayvion Simon
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
      )
}

export default Review