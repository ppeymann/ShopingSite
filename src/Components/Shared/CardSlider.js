import React from 'react'
import { Box, Button, Divider, IconButton, Paper, Rating, Typography } from '@mui/material'
import LocalOfferRoundedIcon from '@mui/icons-material/LocalOfferRounded';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isInCart, quantityItem } from '../../Helper/func';
import { adding, decrease, increase, remove } from '../../Redux/cart/cartAction';

const CardSlider = ({image , title , id , price , rate , item}) => {

  const totalItem = useSelector(state=>state.cartState)
  const dispatch = useDispatch()

  return (
      <Paper sx={{padding:"10px 20px", marginLeft:"5px",marginY:"10px" , display:'flex' , flexDirection:'column' , width:"80%" , borderRadius:"8px"}} elevation={5} >
          <img src={image} style={{width:"150px", alignSelf:"center" , height:"150px" , marginBottom:"30px"}} />
          <Divider />
          <Typography component="p" variant="h6" mt={2} fontFamily="Arial" >{title.split(' ')[0]+title.split(' ')[1]+title.split(' ')[2]}</Typography>
          <Box m={2} display="flex" alignItems="center" >
              <Typography component="p" variant='p' color="#757575" >${price}</Typography>
              <LocalOfferRoundedIcon sx={{color:"#757575", margin:"5px 0px 0 5px" }} fontSize="20px" />
          </Box>
          <Rating readOnly value={rate} precision={0.1} />
          <Box my={2} display="flex" justifyContent="space-between" >
              <Link to={`/products/${id}`} style={{textDecoration:"none"}} >
              <Button variant="contained" sx={{backgroundColor:"#2A0944" }}  >
              Info
                </Button>
              </Link>
              {
                quantityItem(totalItem , item.id)===1 && <IconButton size='small'onClick={()=>dispatch(remove(item))} ><DeleteForeverIcon sx={{color:"#fff", padding:"5px" , borderRadius:"50%",backgroundColor:"#2A0944" }} fontSize="20px"  /></IconButton>
              }
              {
                quantityItem(totalItem , item.id)>1 && <button onClick={()=>dispatch(decrease(item))} style={{width:"28px" , height:"28px" , borderRadius:"50%",margin:"5px 0",border:"none",cursor:"pointer",fontSize:"20px",backgroundColor:"#2A0944",color:"#fff"}} >-</button>
              }
              {
                quantityItem(totalItem , item.id)>0 && <span style={{color:"#000" , marginTop:"5px" , fontSize:"20px" , fontWeight:"600"}} >{quantityItem(totalItem , item.id)}</span>
              }
              {
                isInCart(totalItem ,item.id)?
                <button onClick={()=>dispatch(increase(item))} style={{width:"28px" , height:"28px" , borderRadius:"50%",margin:"5px 0",border:"none",cursor:"pointer",fontSize:"20px",backgroundColor:"#2A0944",color:"#fff"}} >+</button>:
                <Button sx={{backgroundColor:"#2A0944"}} size='small' variant='contained' onClick={()=>dispatch(adding(item))} >Add to Cart</Button>
              }
          </Box>
      </Paper>
  )
}

export default CardSlider