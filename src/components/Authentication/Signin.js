import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, CardContent, TextField, Typography, Button, Card, Grid, Avatar, Link, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Divider } from '@mui/material';
import React, { useState } from 'react';




const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log('Signing in with:', email, password);
  };

  return (
    <Grid container spacing={2} sx={{ textAlign: 'center', height: '80vh' }}>
      <Grid item xs={8} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'left' }}>
        <Typography variant="h6">
          <img style={{ maxWidth: '100%', height: '100%' }} src="https://zone-ui.vercel.app/assets/illustrations/illustration_login.svg" alt="Image Description" />
        </Typography>


      </Grid>
      <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Card sx={{ width: 340, height: 600, p: 2,borderRadius:'20px',boxShadow:'-24px 24px 72px -8px rgba(145, 158, 171, 0.24)' }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column',textAlign:'left' }}>
              <Typography sx={{ fontWeight: 600, fontSize: 32, color: '#212B36',}}>Login</Typography>

              <Typography
          variant="subtitle1" 
          sx={{
            fontWeight: 500,
            fontSize: '0.78rem',
            opacity: 0.7,
            fontFamily: "'__Public_Sans_f258fb', '__Public_Sans_Fallback_f258fb', Helvetica, Arial, sans-serif"
          }}
        >
          Don't have an Account? <Link component="span" sx={{ color: '#FF4500',textDecorationColor:'transparent',fontWeight: 500,cursor: 'pointer', '&:hover': {
              textDecorationColor: '#FF4500',
            },

 }}>Get Started</Link>
 <br/><br/>
        </Typography>

              <TextField
                placeholder='Email'
                sx={{ mt: 2,'& fieldset': { borderColor: 'transparent' },backgroundColor:'#DCDCDC' }} // Add this line to customize the TextField outline
                fullWidth
                variant="outlined" // Add this line to set the TextField to outlined style
              />
 <FormControl sx={{ 
              mt: 2, 
              width: '38ch',
              backgroundColor:'#DCDCDC' ,
              '& fieldset': { borderColor: 'transparent' },
              '&:hover': { '& fieldset': { borderColor: 'transparent' } } // remove border on hover
            }}   >
            <InputLabel sx={{opacity:'.6'}} htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl> 
<br/>
                        <Typography sx={{textAlign:'right'}}>
         <Link  component="span" sx={{ color: '#212B36',opacity: 0.7,textDecorationColor:'#808080',fontSize: '0.80rem',
fontWeight: 500,cursor: 'pointer', '&:hover': {
              textDecorationColor: '#212B36',
            },
           

 }}>Forgot password?</Link></Typography>

          <Button size="large" variant='contained' sx={{ mt: 2,backgroundColor:'#212B36',borderRadius:'10px',textTransform:'capitalize',height:'50px',fontWeight:'600','&:hover': {
              backgroundColor: '#212B36',
              opacity:'.8'
            }, }}>Login</Button>
<br/><br/>


<Divider><span sx={{color:''}}>or continue with</span></Divider>

<Typography sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
  <Button 
    size="small" 
    variant='contained' 
    sx={{ 
      mt: 2, 
      backgroundColor: 'transparent',
      borderRadius: '10px',
      width: '70px',
      height: '50px',
      '&:hover': {
        backgroundColor: '#DCDCDC',
        opacity: '.5',
        borderColor: '#212B36'
      },
      mr: 1 // Add margin-right for space between buttons
    }}
  >
    <Avatar alt="Remy Sharp" src="https://tse2.mm.bing.net/th?id=OIP.S3ZsU5iH6e3Z2K7lXlES7AHaFj&pid=Api&P=0&h=220" />
  </Button>

  <Button 
    size="small" 
    variant='contained' 
    sx={{ 
      mt: 2, 
      backgroundColor: 'transparent',
      borderRadius: '10px',
      width: '70px',
      height: '50px',
      '&:hover': {
        backgroundColor: '#DCDCDC',
        opacity: '.5',
        borderColor: '#212B36'
      },
      mr: 1 // Add margin-right for space between buttons
    }}
  >
    <Avatar alt="Remy Sharp" src="https://tse2.mm.bing.net/th?id=OIP.sya1-NI80eDxjfTJJlQW9wHaHa&pid=Api&P=0&h=220" />
  </Button>

  <Button 
    size="small" 
    variant='contained' 
    sx={{ 
      mt: 2, 
      backgroundColor: 'transparent',
      borderRadius: '10px',
      width: '70px',
      height: '50px',
      '&:hover': {
        backgroundColor: '#DCDCDC',
        opacity: '.5',
        borderColor: '#212B36'
      }
    }}
  >
    <Avatar alt="Remy Sharp" src="https://tse3.mm.bing.net/th?id=OIP.5F69UljXc5LLeM63sxM-6wHaHa&pid=Api&P=0&h=220" />
  </Button>
</Typography>
            </CardContent>
          </Card>
        </Box>


      </Grid>
    </Grid>













  );

};

export default SignIn;










