import React from 'react'
import Nav from './Nav'
import Category from './Category'
import Featuredprdts from './Featuredprdts'
import Carouselcomponent from './Carouselcomponent'
import Hotdeals from './Hotdeals'

const Landing = () => {
  return (
    <div>
     <Nav/> 

<Carouselcomponent/>

     <Category/>
<Hotdeals/>

     <Featuredprdts/>

    </div>
  )
}

export default Landing