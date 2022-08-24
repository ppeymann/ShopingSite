import React, { useState } from 'react'
import { AppBar, Container, Toolbar, Typography,Box, IconButton, Drawer ,Badge} from '@mui/material'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';
import { Link } from 'react-router-dom';
import { Menu } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {
    const pages = ['Home' , 'Products' , 'contactus']
    const [open , setOpen] = useState(false)
    const totalItem = useSelector(state=>state.cartState)
    const dispatch = useDispatch()

  return (
      
      <>
    <AppBar position='static'sx={{background:"#2A0944"}} >
        <Container maxWidth="xl">
            <Toolbar>
                <Link to="/" style={{color:"#fff",textDecoration:"none"}}><StorefrontRoundedIcon sx={{display:{xs:"none", md:"flex" },cursor:"pointer"}} /></Link>
                <Typography variant='h6' component="h1" ml={1} fontFamily="Arial" sx={{display:{xs:"none" , md:"flex" }}}>
                    ShopLand
                </Typography>
                <Box sx={{flexGrow:1,display:{xs:"flex" , md:"none"}}}>
                    <IconButton
                             size="large"
                             aria-label="account of current user"
                             aria-controls="menu-appbar"
                             aria-haspopup="true"
                             onClick={()=>setOpen(true)}
                             >
                        <Menu sx={{color:"#fff"}} />
                    </IconButton>
                </Box>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },marginLeft:'100px'}}>
            {pages.map((page) => (
              <Link to={`${page==="Home"?'':`${page}`}`}
                key={page}
                style={{ margin:"16px 50px" , color: 'white', display: 'block', textDecoration:'none',fontFamily:"arial" }}
              >
                {page}
              </Link>
            ))}
          </Box>
          <Box>
            <Link to="/cartpage" style={{color:"#fff",textDecoration:"none"}}>
            <Badge badgeContent={totalItem.counter} color="primary">
              <LocalGroceryStoreIcon color="#fff" />
            </Badge>
            </Link>
          </Box>
            </Toolbar>
            <Drawer
               anchor='left'
               open={open}
               onClose={()=>setOpen(false)}
    >
        <Box p={2} width="200px" height="100vh" textAlign="center" display="flex" flexDirection="column" sx={{backgroundColor:"#2A0944"}} >
            {pages.map(page=>(
          <Link style={{textDecoration:"none", color:"#fff" , marginTop:"50px"}} key={page} to={`${page==="Home"?'':`${page}`}`}>{page==="contactus"?"Contact us":`${page}`}</Link>))}
        </Box>
    </Drawer>
        </Container>
    </AppBar>

    </>
  )
}

export default Navbar