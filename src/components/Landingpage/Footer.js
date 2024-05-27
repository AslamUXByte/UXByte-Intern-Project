import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
  Stack,
  Divider,
} from '@mui/material';
import Logo from './Logo.png';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { orange } from '@mui/material/colors';

const Footer = () => {
  return (
    <Box sx={{ padding: 4, bgcolor: 'white' }}>
      <Divider sx={{ mb: 4 }} />
      <Grid container spacing={4} sx={{ alignItems: 'flex-start', minHeight: '60vh' }}>
        <Grid item xs={12} md={5} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <Box sx={{ mb: 4 }}>
            <img src={Logo} alt="Logo" style={{ maxWidth: '65px', height: '25px' }} />
          </Box>
          <Typography variant="body1" sx={{ color: '#212B36', opacity: 0.5, fontWeight: 600, lineHeight: 1.25, mb: 4 }}>
            The starting point for your next project based on easy-to-customize Material-UI © helps you build apps faster and better.
          </Typography>
          <Typography variant="h6" sx={{ color: '#212B36', fontWeight: 600, mb: 2 }}>
            Community
          </Typography>
          <Box sx={{ color: '#212B36', mb: 4 }}>
            <Typography variant="body2" gutterBottom>Documentation</Typography>
            <Typography variant="body2" gutterBottom>Changelog</Typography>
            <Typography variant="body2" gutterBottom>Contributing</Typography>
          </Box>
          <Typography variant="h6" sx={{ color: '#212B36', fontWeight: 600, mb: 2 }}>
            Let’s stay in touch
          </Typography>
          <Typography variant="body2" sx={{ color: '#212B36', opacity: 0.5, mb: 2 }}>
            Subscribe to our newsletter to receive the latest articles to your inbox weekly.
          </Typography>
          <TextField
            variant="filled"
            placeholder="Email"
            size="medium"
            InputProps={{
              disableUnderline: true,
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    variant="contained"
                    size="large"
                    disableElevation
                    sx={{ bgcolor: '#212B36', color: 'white', height: '50px', '&:hover': { bgcolor: 'black', opacity: 0.5 } }}
                  >
                    Subscribe
                  </Button>
                </InputAdornment>
              ),
            }}
            sx={{ bgcolor: 'white', borderRadius: 1, width: '100%', maxWidth: '400px', mb: 4 }}
          />
          <Typography variant="h6" sx={{ mb: 2 }}>
            Social
          </Typography>
          <Stack direction="row" spacing={2}>
            <Avatar sx={{ bgcolor: 'transparent' }}>
              <FacebookOutlinedIcon style={{ color: orange[500] }} />
            </Avatar>
            <Avatar sx={{ bgcolor: 'transparent' }}>
              <LinkedInIcon style={{ color: orange[500] }} />
            </Avatar>
            <Avatar sx={{ bgcolor: 'transparent' }}>
              <TwitterIcon style={{ color: orange[500] }} />
            </Avatar>
            <Avatar sx={{ bgcolor: 'transparent' }}>
              <InstagramIcon style={{ color: orange[500] }} />
            </Avatar>
          </Stack>
        </Grid>
        <Grid item xs={12} md={7}>
          {/* Placeholder for additional content if needed */}
        </Grid>
      </Grid>
    </Box>
  );
};
const sections = {
  Marketing: ['Landing', 'Services', 'Case Studies', 'Case Study', 'Blog Posts', 'Blog Post', 'About', 'Contact'],
  Travel: ['Landing', 'Tours', 'Tour', 'Checkout', 'Order Completed', 'Blog Posts', 'Blog Post', 'About', 'Contact'],
  Career: ['Landing', 'Jobs', 'Job', 'Blog Posts', 'Blog Post', 'About', 'Contact'],
  'E-learning': ['Landing', 'Courses', 'Course', 'Blog Posts', 'Blog Post', 'About', 'Contact'],
  'E-commerce': ['Landing', 'Products', 'Product', 'Cart', 'Checkout', 'Order Completed', 'Wishlist', 'Compare', 'Account Personal', 'Account Wishlist', 'Account Vouchers', 'Account Orders', 'Account Payment'],
  Common: ['Login Cover', 'Login Illustration', 'Login Background', 'Register Cover', 'Register Illustration', 'Register Background', 'Forgot Password', 'Verify Code', '404 Error', '500 Error', 'Maintenance', 'ComingSoon', 'Pricing 01', 'Pricing 02', 'Payment', 'Support'],
};

const NavigationMenu = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Grid container spacing={4}>
        {Object.keys(sections).map((section) => (
          <Grid item xs={12} sm={6} md={4} lg={2.4} key={section}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
              {section}
            </Typography>
            {sections[section].map((item, index) => (
              <Typography variant="body2" key={index} sx={{ mb: 0.5 }}>
                {item}
              </Typography>
            ))}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Footer;
