import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';




const Question = () => {
  return (
    <div>

<Box
      sx={{
        width: '70%', // Make the box responsive
        margin: '15px auto', // Center the box horizontally
        borderRadius: 10,
        padding: '20px', // Add padding for better spacing
        marginTop:'100px'
      }}>
        <Typography variant="h6" style={{ color: '#212B36', fontSize: '3.15rem', fontWeight: '700', lineHeight: '1.25', fontFamily: "'__Barlow_92d964','__Barlow_Fallback_92d964',Helvetica,Arial,sans-serif" , paddingLeft: '120px', paddingTop:'30px' }}>
        Frequently Asked Questions
          </Typography>

          <Accordion sx={{fontFamily: "'__Public_Sans_f258fb', '__Public_Sans_Fallback_f258fb', Helvetica, Arial, sans-serif",color:'#212B36'}}>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          What's in the Product Packages?
        </AccordionSummary>
        <AccordionDetails>
        Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in,
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{fontFamily: "'__Public_Sans_f258fb', '__Public_Sans_Fallback_f258fb', Helvetica, Arial, sans-serif",color:'#212B36'}}>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
            How can I Upgrade my product Plan
        </AccordionSummary>
        <AccordionDetails>
        Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in,        </AccordionDetails>
      </Accordion>
              <Accordion sx={{fontFamily: "'__Public_Sans_f258fb', '__Public_Sans_Fallback_f258fb', Helvetica, Arial, sans-serif",color:'#212B36'}}>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Are Design Assets(Figma,Sketch,Adobe XD) Included?
        </AccordionSummary>
        <AccordionDetails>
        Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in,        </AccordionDetails>
      </Accordion>
      <Accordion sx={{fontFamily: "'__Public_Sans_f258fb', '__Public_Sans_Fallback_f258fb', Helvetica, Arial, sans-serif",color:'#212B36'}}>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
         Does This Product Support Typescript?
        </AccordionSummary>
        <AccordionDetails>
        Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in,        </AccordionDetails>
      </Accordion >
      <Accordion sx={{fontFamily: "'__Public_Sans_f258fb', '__Public_Sans_Fallback_f258fb', Helvetica, Arial, sans-serif",color:'#212B36'}}>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
         Can I Use this template in commercial projects like a SaaS?
        </AccordionSummary>
        <AccordionDetails>
        Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in,        </AccordionDetails>
      </Accordion>
      <Accordion sx={{fontFamily: "'__Public_Sans_f258fb', '__Public_Sans_Fallback_f258fb', Helvetica, Arial, sans-serif",color:'#212B36'}}>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
         How Can I Request Support?
        </AccordionSummary>
        <AccordionDetails>
        Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in,        </AccordionDetails>
      </Accordion>




      </Box>




    </div>
  )
}

export default Question