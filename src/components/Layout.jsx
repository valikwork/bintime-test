import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';


export default function Layout() {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', flexGrow: 2}}>

      <Container maxWidth='100%' sx={{bgcolor: '#1A232E', display: 'flex', justifyContent: 'center', alignItems: 'center', height: "64px"}}>
        <Typography variant="h3" color="#fff" sx={{}}>Formula</Typography>
      </Container>

      <Box sx={{flexGrow: 2}}>
        <Outlet />
      </Box>

      <Container 
        maxWidth='100%' 
        sx={{
            bgcolor: "#fff", 
            boxShadow: '0px -2px 4px 0px rgba(223, 223, 223, 0.25)',
            height: '80px',
          }}
      >
        <Container sx={{display: 'flex', justifyContent: 'space-between', height: '100%'}}>
          <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px'}}>
            <Typography variant='h4' sx={{fontSize: '18px'}}>Formula</Typography>
            <Typography variant='body1'>©Formula 2023. All Rights Reserved</Typography>
          </Box>
          <Box sx={{display: 'flex', alignSelf: 'flex-end', alignItems: 'center', pb: '12px'}}>
            <MailOutlineIcon />
            <a href="mailto:info@formula.com" style={{color: '#4E5460', textDecoration: 'none', marginLeft: '16px'}}>info@formula.com</a>
          </Box>
        </Container>
      </Container>
    </Box>
  )
}
