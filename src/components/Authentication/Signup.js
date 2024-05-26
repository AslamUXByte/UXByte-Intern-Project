import { Box, CardContent, TextField, Typography, Button, Select, MenuItem,Link,Card } from '@mui/material';
import React, { useState } from 'react';
import { Google, Facebook, GitHub } from '@mui/icons-material';
import axios from 'axios';
import { Link as RouterLink } from 'react-router-dom'




const SignUpPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('');

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRetypePasswordChange = (e) => {
    setRetypePassword(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleCountryCodeChange = (e) => {
    setCountryCode(e.target.value);
  };

  const handleRegister = () => {
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Retype Password:", retypePassword);
    console.log("Phone Number:", phoneNumber);
    console.log("Country Code:", countryCode);
    // Here you can add your logic to submit the form
    const signupdata={
      name:fullName,email,password}
      
    axios.post("http://localhost:7000/user/user-signup",signupdata
    ).then((response)=>{
      const data = response
      console.log("data",data)
    })
  };

  return (

  <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: "100vh", width: '100vw', bgcolor: 'white' }}>
    <Card sx={{ width: 340, height: 650, p: 2,borderRadius:'20px',boxShadow:'-24px 24px 72px -8px rgba(145, 158, 171, 0.24)' }}>

      <CardContent sx={{ width: 300 }}>
        <Typography variant="h5" sx={{ textAlign: 'starting', mb: 2, fontWeight: "bold" }}>GET START</Typography>
        <Typography
          variant="subtitle1" 
          sx={{
            fontWeight: 500,
            fontSize: '0.78rem',
            opacity: 0.7,
            fontFamily: "'__Public_Sans_f258fb', '__Public_Sans_Fallback_f258fb', Helvetica, Arial, sans-serif"
          }}
        >
          Don't have an Account? 

        <Link
        component={RouterLink}
        to="/"
        sx={{
          color: '#FF4500',
          textDecorationColor: 'transparent',
          fontWeight: 500,
          marginLeft:'5px',
          cursor: 'pointer',
          '&:hover': {
            textDecorationColor: '#FF4500',
          },
        }}
      >
        Login
      </Link>
</Typography>
        <TextField
        input
          placeholder='Full Name'
          sx={{ mt: 1, width: '100%' }}
          value={fullName}
          onChange={handleFullNameChange}
        />

        <TextField
          placeholder='Email'
          sx={{ mt: 2, width: '100%' }}
          value={email}
          onChange={handleEmailChange}
        />

        <TextField
          placeholder='Password'
          sx={{ mt: 2, width: '100%' }}
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />

        <TextField
          placeholder='Retype Password'
          sx={{ mt: 2, width: '100%' }}
          type="password"
          value={retypePassword}
          onChange={handleRetypePasswordChange}
        />

        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
          <Select
            value={countryCode}
            onChange={handleCountryCodeChange}
            sx={{ width: '100px' }}
          >
            <MenuItem value="+1">+1 (US)</MenuItem>
            <MenuItem value="+91">+91 (India)</MenuItem>
            {/* Add more country codes as needed */}
          </Select>
          <TextField
            placeholder='Phone Number'
            sx={{ ml: 1, width: 'calc(100% - 100px)' }}
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
        </Box>

        <Button size="large" variant='contained' fullWidth onClick={handleRegister} sx={{ mt: 3, bgcolor: 'black' }}>Register</Button>
        <p sx={{ textAlign: 'center', mb: 2 }}>I agree to <u>Terms of Service</u> and <u>Privacy Policy</u></p>
        <Typography variant="body1" sx={{ textAlign: 'center', mb: 2 }}>or continue with</Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 'auto', mb: 2 }}>
        <Box sx={{ mr: 4 }}>
          <Google sx={{ color: '#DB4437', fontSize: 28 }} />
        </Box>
        <Box sx={{ mx: 4 }}>
          <Facebook sx={{ color: '#3b5998', fontSize: 28 }} />
        </Box>
        <Box sx={{ ml: 4 }}>
          <GitHub sx={{ fontSize: 28 }} />
        </Box>
       

      </Box>
      </CardContent>

      </Card>

    </Box>

  );
};

export default SignUpPage;


