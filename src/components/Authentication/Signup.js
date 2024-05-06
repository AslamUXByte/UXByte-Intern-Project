import { Box, CardContent, TextField, Typography, Button, Select, MenuItem } from '@mui/material';
import React, { useState } from 'react';

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
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: "100vh" }}>
      <CardContent>
        <Typography variant="h5" sx={{ textAlign: 'center', mb: 2 }}>GET START</Typography>

        <Typography sx={{ fontWeight: 600 }}>Full Name</Typography>
        <TextField
          placeholder='Fullname'
          sx={{ mt: 1, width: '100%' }}
          value={fullName}
          onChange={handleFullNameChange}
        />

        <Typography sx={{ fontWeight: 600, mt: 2 }}>Email</Typography>
        <TextField
          placeholder='Email'
          sx={{ mt: 1, width: '100%' }}
          value={email}
          onChange={handleEmailChange}
        />

        <Typography sx={{ fontWeight: 600, mt: 2 }}>Password</Typography>
        <TextField
          placeholder='Password'
          sx={{ mt: 1, width: '100%' }}
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />

        <Typography sx={{ fontWeight: 600, mt: 2 }}>Retype Password</Typography>
        <TextField
          placeholder='Retype Password'
          sx={{ mt: 1, width: '100%' }}
          type="password"
          value={retypePassword}
          onChange={handleRetypePasswordChange}
        />

        <Typography sx={{ fontWeight: 600, mt: 2 }}>Phone Number</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
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

        <Button size="small" variant='contained' fullWidth onClick={handleRegister} sx={{ mt: 3, bgcolor: 'orange' }}>Signup</Button>
      </CardContent>
    </Box>
  );
};

export default SignUpPage;



