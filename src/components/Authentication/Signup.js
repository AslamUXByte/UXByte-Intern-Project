import React from 'react'

import { Box , TextField} from '@mui/material';
import AuthNavbar from './AuthNavbar';
const Signup = () => {
  return (
   <>
   <AuthNavbar/>


    <Box><TextField id="outlined-basic" label="Outlined" variant="outlined" color='warning'/>
    </Box>
    </>
  )
}

export default Signup