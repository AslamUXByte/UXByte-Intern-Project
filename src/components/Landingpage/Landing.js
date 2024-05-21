import React from 'react'
import Nav from './Nav'
import Category from './Category'
import Featuredprdts from './Featuredprdts'
import Carouselcomponent from './Carouselcomponent'
import HotDeal from './hotdeals'
import Footer from './Footer'
// import Hotdeals from 'src/components/Landingpage/hotdeals.js'

const Landing = () => {
  return (
    <div>
     <Nav/> 

<Carouselcomponent/>

     <Category/>
<HotDeal/>

     <Featuredprdts/>
<Footer/>
    </div>
  )
}

export default Landing