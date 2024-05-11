import React from 'react'
import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Grid, Typography, Box } from '@mui/material';
// import Hotdeals from "src/components/Landingpage/hotdeals.js";
import bg from '../Landingpage/bg-gradient.png'

import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const Carouselcomponent = () => {

    var items = [
        {
            name: "Nike Air Force 1 NDESTRUKT ",
            description: "Occaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi",
            image:"https://zone-ui.vercel.app/assets/images/z_product/product_1.png"
        },
        {
            name: "Foundations Matte Flip Flop",
            description: "ccaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi",
            image:"https://zone-ui.vercel.app/assets/images/z_product/product_2.png"

        
        },
        {
            name: "Nike Air Zoom Pegasus A.I.R Chaz Bear",
            description: "ccaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi",
            image:"https://zone-ui.vercel.app/assets/images/z_product/product_3.png"

        },
        {
            name: "Arizona Soft Footbed Sandal",
            description: "ccaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi",
            image:"https://zone-ui.vercel.app/assets/images/z_product/product_4.png"


        }

    ];
  return (

    <Carousel sx={{width:'1000px',justifyContent:'center',marginLeft:'250px',marginTop:'50px',borderRadius:'20px',backgroundColor:'#F8F8FF' ,
   }}>
           {
               items.map( (item, i) => 
                <Grid container spacing={2} sx={{  textAlign: 'center', height: '80vh',backgroundImage:{bg},
              }}>
                          <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'left',marginLeft:'50px' }}>
                  <Typography sx={{color:'#212B36'}} key={i}>
                  <Box sx={{width:'170px',height:'20px',backgroundColor:'#FAEBD7',borderRadius:'5px',color:'#B8860B',fontSize:'13px',fontWeight:'600',padding:'5px'}}>
Opening Sale Discount 50%
</Box>

                      <h1>{item.name}</h1>
<Typography sx={{opacity:'.48'}}>
                      <p>{item.description}</p>
                      </Typography>
                      <Button variant="" href=""  sx={{
            backgroundColor: '#212B36',
            color: 'white',
            textTransform: 'capitalize',
            fontWeight:'600'
          }}>
            Shop Now<br/> <ArrowForwardIosOutlinedIcon fontSize='10px'></ArrowForwardIosOutlinedIcon>
          </Button>                      
          </Typography>

                  </Grid>
                  <Grid item xs={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img style={{ maxWidth: '70%', height: '60%' }} src={item.image} alt="Image Description" />

                  </Grid>

                  </Grid>
               )
           }
       </Carousel>

  )
}

export default Carouselcomponent