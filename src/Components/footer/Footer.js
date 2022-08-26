import { Box, Container, Grid, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <Box bgcolor={`#2C3639`}  >
        <Container maxWidth="xl">
            <Grid container alignItems="center" justifyContent="space-between" >
                <Grid container item xs={12} md={6}>
                    <Grid item p={2} xs={12} >
                        <Link style={{textDecoration:'none' , color:"#fff" , fontSize:"21px" , fontFamily:"Arial"}} to="/">Home</Link>
                    </Grid>
                    <Grid p={2} item xs={12} >
                        <Link style={{textDecoration:'none' , color:"#fff" , fontSize:"21px" , fontFamily:"Arial"}} to="/Products">Products</Link>
                    </Grid>
                    <Grid item p={2} xs={12} >
                        <Link style={{textDecoration:'none' , color:"#fff" , fontSize:"21px" , fontFamily:"Arial"}} to="/contactus">Contact Us</Link>
                    </Grid>
                </Grid>
                <Grid container item xs={12} md={6}>
                    <Grid item p={2} xs={12} sx={{display:"flex" , alignItems:"center"}} >
                    <InstagramIcon sx={{color:'#fff' , paddingRight:"7px" }}/> <Typography color="#fff">@p.peyman.n</Typography>
                    </Grid>
                    <Grid p={2} item xs={12}sx={{display:"flex" , alignItems:"center"}} >
                    <TelegramIcon sx={{color:'#fff' , paddingRight:"7px" }} />  <Typography color="#fff">p_peyman_n</Typography>
                    </Grid>
                    <Grid item p={2} xs={12} sx={{display:"flex" , alignItems:"center"}} >
                       <PhoneIphoneIcon sx={{color:'#fff' , paddingRight:"7px" }} /> <Typography color="#fff">+98912345678</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    </Box>
  )
}

export default Footer