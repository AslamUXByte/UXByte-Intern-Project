import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';
import Men from './men-clothes.png';
import Wmen from './women-clothes.png';
import Watch from './watches.png';
import Home from './home-appliances.png';
import Sport from './sports.png';
import Book from './stationary.png';
import Living from './living.png';
import Health from './health.png';
import Mobile from './mobile.png';
import Lap from './laptop.png';
import Tab from './tablet.png';
import head from './headphones.png';

const Category = () => {
  const cardData = [
    { id: 1, title: 'Men Clothes', image: Men },
    { id: 2, title: 'Women Clothes', image: Wmen },
    { id: 3, title: 'Watches', image: Watch },
    { id: 4, title: 'Home Appliances', image: Home },
    { id: 5, title: 'Sports', image: Sport },
    { id: 6, title: 'Books & Stationery', image: Book },
    { id: 7, title: 'Living', image: Living },
    { id: 8, title: 'Health', image: Health },
    { id: 9, title: 'Mobile', image: Mobile },
    { id: 10, title: 'Laptops', image: Lap },
    { id: 11, title: 'Tablets', image: Tab },
    { id: 12, title: 'Headphones', image: head },

  ];

  return (
    <Grid container spacing={2} sx={{  textAlign: 'center', height: '60vh', width: '1200px', margin: '60px', marginLeft: '130px' }}>
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', textAlign: 'left' }}>
        <Typography sx={{ color: '#212B36', fontSize: '30px', fontWeight: '600',marginRight:'1000px' }}>
          Categories
        </Typography>
      </Grid>
      <Grid container spacing={2} sx={{ marginTop: '20px', justifyContent: 'flex-start' }}>
        {cardData.map((card) => (
          <Grid item xs={12} sm={6} md={4} lg={2} key={card.id}>
            <Card variant="outlined" sx={{ width: '180px', height: '150px', borderRadius: '10px',
             '&:hover': {
              border:'2px solid black',
               borderColor: 'black', // border color on hover
             }
            , }}>
              <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Avatar sx={{ width: 58, height: 58 }} alt={card.title} src={card.image} />
                <Typography sx={{ color: '#212B36', fontSize: '14px', fontWeight: '500', marginTop: '8px' }}>
                  {card.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}

export default Category;
