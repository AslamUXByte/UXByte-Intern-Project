import React, { Component } from 'react';
import { Grid, Box, Typography, Container, Rating, Stack, FormControlLabel, RadioGroup, ToggleButton, Button,MenuItem,FormControl,InputLabel } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import ms from '../Landingpage/ms.png';
import mob from '../Landingpage/mobile.png';
import con from '../Landingpage/controller.png';
import Nav from '../Landingpage/Nav'
import CheckIcon from '@mui/icons-material/Check';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import Star from './Star';
import Review from './Review';

export default class App extends Component {

  pictures = [
    { imagel: ms },
    { imagel: mob },
    { imagel: con },
  ];
  state = {
    selectedValue1: '128gb',
    selectedValue2: 'red'
  };

  handleSelection1 = (value) => {
    this.setState({ selectedValue1: value });
  };

  handleSelection2 = (value) => {
    this.setState({ selectedValue2: value });
  };

  render() {
    const { selectedValue1, selectedValue2 } = this.state;

    const getButtonStyle = (selectedValue, value) => ({
      border: selectedValue === value ? '2px solid black' : '1px solid grey',
      color: selectedValue === value ? 'black' : 'inherit',
      backgroundColor: selectedValue === value ? 'lightgrey' : 'inherit',
      position: 'relative',
      padding: '10px 20px',
      minWidth: '60px',
      minHeight: '40px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    });

    const getColorButtonStyle = (selectedValue, value, backgroundColor) => ({
      backgroundColor: backgroundColor,
      border: selectedValue === value ? '2px solid black' : '1px solid grey',
      position: 'relative',
      color: selectedValue === value ? 'black' : 'white',
      padding: '10px 20px',
      minWidth: '60px',
      minHeight: '40px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    });
  
    return (
      <>
        <Nav />

        <Container sx={{ mt: 16, mb: 5 }}>
          <Grid container justifyContent="center" spacing={4}>
            <Grid item xs={12} md={6}>
              <Carousel
                sx={{
                  width: '100%',
                  margin: 'auto',
                }}
              >
                {this.pictures.map(({ imagel }) => (
                  <Grid container key={imagel} spacing={2} justifyContent="center" alignItems="center">
                    <Grid item xs={12}>
                      <Box
                        component="img"
                        src={imagel}
                        sx={{
                          width: '100%',
                          height: 'auto',
                        }}
                      />
                    </Grid>
                  </Grid>
                ))}
              </Carousel>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid sx={{ width: '450px' }} container direction="column" spacing={2}>
                <Grid item>
                  <Box sx={{ width: '60px', height: '17px', backgroundColor: 'rgba(54, 179, 126, 0.16)', borderRadius: '6px', color: '#006400', fontSize: '13px', fontWeight: '600', padding: '5px', fontFamily: "'Poppins', sans-serif", paddingTop: '6px', }}>
                    In Stock
                  </Box>

                  <Typography sx={{ color: '#212B36', fontFamily: "'Poppins', sans-serif", fontWeight: '600', fontSize: '1.25rem', marginTop: '15px' }} variant="h6">Apple iphone</Typography>
                </Grid>
                <Grid item>
                  <Grid item container alignItems="center">
                    <Rating name="read-only" value={4} readOnly />
                    <Typography sx={{ color: 'rgb(145, 158, 171)', fontSize: '.75rem', fontWeight: '400' }} variant="body1">(9911 reviews)</Typography>
                  </Grid>
                  <Grid sx={{ marginTop: '15px' }} item container alignItems="center">

                    <Box sx={{ color: '#212B36', fontFamily: "'Poppins', sans-serif", fontSize: '1.125rem', fontWeight: '600', }}>
                      $83.74
                    </Box>
                    <Typography sx={{ color: 'rgb(145, 158, 171)', fontSize: '1.125rem', fontWeight: '600', textDecoration: 'line-through', paddingLeft: '5px' }} variant="body1">$97.14</Typography>

                  </Grid>

                </Grid>
                <Grid item>
                  <Typography sx={{ color: 'rgb(145, 158, 171)' }} variant="body2">
                    Occaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur facilis. Ut omnis voluptates nihil accusantium doloribus eaque debitis.
                  </Typography>

                  <Box sx={{ color: '#212B36', fontFamily: "'Poppins', sans-serif", fontSize: '.8rem', fontWeight: '550', marginTop: '18px' }}>
                    Color
                  </Box>
                  <Stack sx={{ marginTop: '20px' }} direction="row" spacing={2} >
                    <ToggleButton
                      value="red"
                      selected={selectedValue2 === 'red'}
                      onChange={() => this.handleSelection2('red')}
                      sx={getColorButtonStyle(selectedValue2, 'red', 'red')}
                    >
                      {selectedValue2 === 'red' && <CheckIcon sx={{ position: 'absolute', right: 5, top: 5, fontSize: '16px' }} />}
                    </ToggleButton>
                    <ToggleButton
                      value="blue"
                      selected={selectedValue2 === 'blue'}
                      onChange={() => this.handleSelection2('blue')}
                      sx={getColorButtonStyle(selectedValue2, 'blue', 'blue')}
                    >
                      {selectedValue2 === 'blue' && <CheckIcon sx={{ position: 'absolute', right: 5, top: 5, fontSize: '16px' }} />}
                    </ToggleButton>
                    <ToggleButton

                      value="green"
                      selected={selectedValue2 === 'green'}
                      onChange={() => this.handleSelection2('green')}
                      sx={getColorButtonStyle(selectedValue2, 'green', 'green')}
                    >
                      {selectedValue2 === 'green' && <CheckIcon sx={{ position: 'absolute', right: 5, top: 5, fontSize: '16px' }} />}
                    </ToggleButton>
                    <ToggleButton
                      value="yellow"
                      selected={selectedValue2 === 'yellow'}
                      onChange={() => this.handleSelection2('yellow')}
                      sx={getColorButtonStyle(selectedValue2, 'yellow', 'yellow')}
                    >
                      {selectedValue2 === 'yellow' && <CheckIcon sx={{ position: 'absolute', right: 5, top: 5, fontSize: '16px' }} />}
                    </ToggleButton>
                  </Stack>
                  <Box sx={{ color: '#212B36', fontFamily: "'Poppins', sans-serif", fontSize: '.8rem', fontWeight: '550', marginTop: '15px' }}>
                    Memory
                  </Box>
                  <Grid sx={{ marginTop: '15px' }} item container alignItems="center">
                    <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" mb={2}>
                      <ToggleButton
                        value="128gb"
                        selected={selectedValue1 === '128gb'}
                        onChange={() => this.handleSelection1('128gb')}
                        sx={getButtonStyle(selectedValue1, '128gb')}
                      >
                        <Typography>128GB</Typography>
                      </ToggleButton>
                      <ToggleButton
                        value="256gb"
                        selected={selectedValue1 === '256gb'}
                        onChange={() => this.handleSelection1('256gb')}
                        sx={getButtonStyle(selectedValue1, '256gb')}
                      >
                        <Typography>256GB</Typography>
                      </ToggleButton>
                      <ToggleButton
                        value="512gb"
                        selected={selectedValue1 === '512gb'}
                        onChange={() => this.handleSelection1('512gb')}
                        sx={getButtonStyle(selectedValue1, '512gb')}
                      >
                        <Typography>512GB</Typography>
                      </ToggleButton>
                      <ToggleButton
                        value="1tb"
                        selected={selectedValue1 === '1tb'}
                        onChange={() => this.handleSelection1('1tb')}
                        sx={getButtonStyle(selectedValue1, '1tb')}
                      >
                        <Typography>1TB</Typography>
                      </ToggleButton>
                    </Stack>
                  </Grid>
                  <Box sx={{ width: '100%', display: 'flex', mt: 2 }}>
                    <Stack direction="row" spacing={2}>
         <Button variant='contained' sx={{
                        mt: 3, bgcolor: '#212B36', fontWeight: 700,
                        fontSize: '1rem',
                        borderRadius: '5px', textTransform: 'capitalize', '&:hover': {
                          backgroundColor: '#212B36', opacity: '.7'
                        },
                      }}><AddShoppingCartOutlinedIcon></AddShoppingCartOutlinedIcon>Add to Cart</Button>
                      <Button variant="" href="" size="small" sx={{
                        backgroundColor: '#FF4500',
                        color: 'white',
                        fontWeight: 700,
                        fontSize: '1rem',
                        borderRadius: '5px',
                        height: '50px',


                        textTransform: 'capitalize',
                        '&:hover': {
                          backgroundColor: '#B22222',
                        },
                      }}>


                        Buy Now
                      </Button>
                    </Stack>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <Box justifyContent="center" sx={{ p: { xs: 2, sm: 4 },marginLeft:'130px' }}>
      <Grid width={600}  container spacing={2}>
        <Grid item xs={12}>
          <Typography sx={{fontWeight:'600'}} variant="h6" color="#212B36" gutterBottom>
            Specifications
          </Typography>
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <Typography variant="body1" color="textSecondary">
            Category
          </Typography>
        </Grid>
        <Grid item xs={6} sm={8} md={9}>
          <Typography variant="body1" color="#212B36">
            Mobile
          </Typography>
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <Typography variant="body1" color="textSecondary">
            Manufacturer
          </Typography>
        </Grid>
        <Grid item xs={6} sm={8} md={9}>
          <Typography variant="body1" color="#212B36">
            Apple
          </Typography>
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <Typography variant="body1" color="textSecondary">
            Warranty
          </Typography>
        </Grid>
        <Grid item xs={6} sm={8} md={9}>
          <Typography variant="body1" color="#212B36">
            12 Months
          </Typography>
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <Typography variant="body1" color="textSecondary">
            Serial number
          </Typography>
        </Grid>
        <Grid item xs={6} sm={8} md={9}>
          <Typography variant="body1" color="#212B36">
            358607726380311
          </Typography>
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <Typography variant="body1" color="textSecondary">
            Ships From
          </Typography>
        </Grid>
        <Grid item xs={6} sm={8} md={9}>
          <Typography variant="body1" color="#212B36">
            United States
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography sx={{fontWeight:'600'}} variant="h6" color="#212B36" gutterBottom>
            Description
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" color="#212B36" paragraph>
            Aenean viverra rhoncus pede. Etiam feugiat lorem non metus. Quisque malesuada placerat nisl.
          </Typography>
          <Typography  variant="body1" color="#212B36" component="ul" sx={{ pl: 5, }}>
            <li>Updated with a more matte texture, perfect for casual styling.</li>
            <li>Durable water-repellent coating.</li>
            <li>dsdsds</li>
            <li>dsdsds</li>
            <li>Anti-static lining.</li>
          </Typography>
          <Typography sx={{marginTop:'15px'}} variant="body1" color="#212B36" paragraph>
            Living in today’s metropolitan world of cellular phones, mobile computers and other high-tech gadgets is not just hectic but very impersonal. We make money and then invest our time and effort in making more money.
          </Typography>
        </Grid>
      </Grid>
    </Box>  
    <Star/>
    <Review/>
        </>
    );
  }
}
