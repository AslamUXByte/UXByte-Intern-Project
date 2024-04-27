import React, { useState } from 'react';
import { FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Button, Link, Card, CardContent, Typography, CardActions, Box, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import './SignIn.css';

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
    // Implement your sign-in logic here, e.g., call an authentication API
    console.log('Signing in with:', email, password);
  };

  return (
    // <>
    //   <div className="top-bar">
    //     <div className="login-icon-container">
    //       <img src="https://miro.medium.com/v2/resize:fit:2400/1*K41119oiymFsKOMIB09PJg.png" alt="Login icon" className="login-icon" height={50} />
    //     </div>
    //     <div className="help-settings-container">
    //       <IconButton edge="start" color="inherit" aria-label="settings">
    //         <SettingsIcon />
    //       </IconButton>
    //       <IconButton edge="start" color="inherit" aria-label="help">
    //         <HelpIcon />
    //       </IconButton>
    //       <Link href="/help" color="inherit" underline="none" className="help-link">
    //         Need Help
    //       </Link>
    //     </div>
    //   </div>
    //   <div className="sign-in-container">
    //     <div className="sign-in-form">
    //       <h2>Login</h2>
    //       <p className="Signup-link">
    //         Don't have an account?{' '}
    //         <Link href="/Signup" className="orange-link">
    //           Get started
    //         </Link>
    //       </p>
    //       <form onSubmit={handleSignIn}>
    //         <div className="form-group">
    //           <FormControl fullWidth variant="outlined">
    //             <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
    //             <OutlinedInput
    //               id="outlined-adornment-email"
    //               type="email"
    //               value={email}
    //               onChange={(e) => setEmail(e.target.value)}
    //               label="Email"
    //               required
    //             />
    //           </FormControl>
    //         </div>
    //         <div className="form-group">
    //           <FormControl fullWidth variant="outlined">
    //             <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
    //             <OutlinedInput
    //               id="outlined-adornment-password"
    //               type={showPassword ? 'text' : 'password'}
    //               value={password}
    //               onChange={(e) => setPassword(e.target.value)}
    //               endAdornment={
    //                 <InputAdornment position="end">
    //                   <IconButton
    //                     aria-label="toggle password visibility"
    //                     onClick={handleClickShowPassword}
    //                     onMouseDown={handleMouseDownPassword}
    //                     edge="end"
    //                   >
    //                     {showPassword ? <VisibilityOff /> : <Visibility />}
    //                   </IconButton>
    //                 </InputAdornment>
    //               }
    //               label="Password"
    //               required
    //             />
    //           </FormControl>
    //         </div>
    //         <div className="form-group">
    //           <Link href="#" className="forgot-password">Forgot password?</Link>
    //         </div>
    //         <Button
    //           type="submit"
    //           variant="contained"
    //           className="login-button"
    //           fullWidth
    //           style={{ backgroundColor: '#a9a9a9', color: 'white' }}
    //         >
    //           Login
    //         </Button>
    //       </form>
    //       <div className="or-divider">
    //         <span className="or-text">or continue with</span>
    //         <hr className="divider" />
    //       </div>
    //       <div className="social-buttons">
    //         <IconButton aria-label="Google" className="social-icon">
    //           <img src="https://yt3.googleusercontent.com/rhqKhfZPaVKRfPi1UvaoekFcSVkipICyGmshnUT9SYMR2JMI8G40YqtaOqz94Ao5rdu_NE0nAw=s900-c-k-c0x00ffffff-no-rj" alt="Google" />
    //         </IconButton>
    //         <IconButton aria-label="Facebook" className="social-icon">
    //           <img src="https://store-images.s-microsoft.com/image/apps.30645.9007199266245907.cb06f1f9-9154-408e-b4ef-d19f2325893b.ac3b465e-4384-42a8-9142-901c0405e1bc" alt="Facebook" />
    //         </IconButton>
    //         <IconButton aria-label="Github" className="social-icon">
    //           <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github" />
    //         </IconButton>
    //       </div>
    //     </div>
    //   </div>
    // </>
    <>
    <Box sx={{  display:'flex',justifyContent:"center" ,alignItems:"center", height:"100vh"}}>
    <Card sx={{ width: 340,height:300, p:2 }}>
      <CardContent > 
        <Typography sx={{fontWeight:600, fontSize:32, }}>Login</Typography>
        <TextField 
        placeholder='Email'
        sx={{mt:2}}
        fullWidth
        />
         <TextField 
        placeholder='Password'
        sx={{mt:2}}
        fullWidth
        />
              </CardContent>
      
        <Button size="small" variant='contained' fullWidth>LOGIN</Button>
     
    </Card>
    </Box>
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  );

};

export default SignIn;










