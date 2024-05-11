import React from 'react'
import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Grid } from '@mui/material';

const Carouselcomponent = () => {

    var items = [
        {
            name: "Nike ",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        },
        {
            name: "Random Name #3",
            description: "Another random thing!"
        }
    ];
  return (

    <Carousel>
           {
               items.map( (item, i) => 
                <Grid>
                  <Paper key={i}>
                      <h2>{item.name}</h2>
                      <p>{item.description}</p>
                      <Button className="CheckButton">
                          Check it out!
                      </Button>
                  </Paper>
                  </Grid>
               )
           }
       </Carousel>

  )
}

export default Carouselcomponent