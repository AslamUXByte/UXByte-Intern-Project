import { Box, CardContent, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Navbar, Card, Button, Form } from 'react-bootstrap';
const SignUpPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = () => {
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    // <div>
    //   <Navbar bg="light" expand="lg">
    //     <Navbar.Brand href="#">Your Logo</Navbar.Brand>
    //   </Navbar>

    //   <div className="container mt-4">
    //     <div className="row justify-content-center">
    //       <div className="col-md-6">
    //         <Card>
    //           <Card.Body className="text-center">
    //             <h4 style={{ fontSize: '24px', marginBottom: '20px' }}>Sign Up</h4>

    //             <p className="mt-3">
    //               Already have an account?
    //             </p>
    //             <Form>
    //               <Form.Group controlId="formFullName">
    //                 <Form.Label>Full Name</Form.Label>
    //                 <Form.Control
    //                   type="text"
    //                   placeholder="Enter your full name"
    //                   value={fullName}
    //                   onChange={handleFullNameChange}
    //                 />
    //               </Form.Group>

    //               <Form.Group controlId="formEmail">
    //                 <Form.Label>Email address</Form.Label>
    //                 <Form.Control
    //                   type="email"
    //                   placeholder="Enter email"
    //                   value={email}
    //                   onChange={handleEmailChange}
    //                 />
    //               </Form.Group>

    //               <Form.Group controlId="formPassword">
    //                 <Form.Label>Password</Form.Label>
    //                 <Form.Control
    //                   type="password"
    //                   placeholder="Password"
    //                   value={password}
    //                   onChange={handlePasswordChange}
    //                 />
    //               </Form.Group>

    //               <Button variant="primary" onClick={handleRegister}>
    //                 Register
    //               </Button>
    //             </Form>

                
                
    //           </Card.Body>
    //         </Card>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',height:"100vh" }}>
    <Card sx={{width:340,height:300,p:2}}>
      <CardContent>
        <Typography sx={{fontWeight:600,fontSize:30}}>GET START</Typography>
        <TextField
        placeholder='Fullname'
        sx={{mt:2}}
        fullWidth
        />

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
        <Button size="small" variant='contained' fullWidth>Register</Button>
    </Card>
    </Box>
  );
};

export default SignUpPage;
