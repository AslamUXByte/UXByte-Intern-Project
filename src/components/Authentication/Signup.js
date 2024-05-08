import { Box, CardContent, TextField, Typography, Button, Select, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import { Google, Facebook, GitHub } from '@mui/icons-material';

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
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: "100vh", width: '100vw', bgcolor: 'white' }}>
      <CardContent sx={{ width: 300 }}>
        <Typography variant="h5" sx={{ textAlign: 'starting', mb: 2, fontWeight: "bold" }}>GET START</Typography>
        <p sx={{ textAlign: 'starting', mb: 2 }}>Already have an account? <span style={{ color: 'orange' }}>Login</span></p>

        <TextField
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
      </CardContent>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 'auto', mb: 2 }}>
        <Box sx={{ mr: 4 }}>
          <Google sx={{ color: '#DB4437', fontSize: 30 }} />
        </Box>
        <Box sx={{ mx: 4 }}>
          <Facebook sx={{ color: '#3b5998', fontSize: 30 }} />
        </Box>
        <Box sx={{ ml: 4 }}>
          <GitHub sx={{ fontSize: 30 }} />
        </Box>
      </Box>
    </Box>
  );
};

export default SignUpPage;


