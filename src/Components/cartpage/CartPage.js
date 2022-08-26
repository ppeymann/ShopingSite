import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {Container,TableContainer,Table,TableHead,TableRow,TableCell,Grid,Paper,TableBody,Button, Typography, Box } from '@mui/material'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {quantityItem} from '../../Helper/func'
import {  decrease, increase, remove,checkOut,clear } from '../../Redux/cart/cartAction';
import { Link } from 'react-router-dom';
import {styled} from '@mui/material/styles'


const CustomButton = styled(Button)`

background-color: #2C3639;
&:hover{
   background-color: #f3f3f3;
   color:#2C3639;
}

@media screen and (max-width:400px){
    width: 40px;
    font-size: 10px;
}
`

const CartPage = () => {

    const items = useSelector(state=>state.cartState)
    const dispatch = useDispatch()
    console.log(items)
  return (
    <Container maxWidth="xl">
        <Grid container display="flex" justifyContent="center" alignItems="center" >
            <Grid item xs={12} md={6} m={10} alignItems="center" >
        <TableContainer component={Paper} >
            <Table sx={{minHeight:"650px"}} aria-label="simple table" >
                <TableHead>
                    <TableRow>
                        <TableCell>
                            photo
                        </TableCell>
                        <TableCell  >
                            title
                        </TableCell>
                        <TableCell  >
                            price
                        </TableCell>
                        <TableCell >
                            quantity
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        items.cartItem.map(item=>(
                            <TableRow key={item.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row"><Link to={`/products/${item.id}`} > <img src={item.image} style={{width:"50px",height:"50px",borderRadius:"50%"}} /></Link> </TableCell>
                                <TableCell sx={{fontSize:"10px"}} >{item.title}</TableCell>
                                <TableCell>${item.price*item.quantity}</TableCell>
                                <TableCell align='right' >
                                    <Box display="flex" width="100%" justifyContent="space-between" alignItems="center" >
                                    {
                                        quantityItem(items , item.id)>1 && <Box sx={{cursor:"pointer" ,fontSize:"20px",color:"#2A0944"}} onClick={()=>dispatch(decrease(item))}  >-</Box>
                                    }
                                    {
                                        quantityItem(items , item.id)===1 && <Box sx={{cursor:"pointer" ,fontSize:"20px",color:"#2A0944"}} > <DeleteForeverIcon onClick={()=>dispatch(remove(item))} sx={{fontSize:"15px"}} /> </Box> 
                                    }
                                    <Typography fontSize={15} >{quantityItem(items,item.id)}</Typography>
                                    <Box sx={{cursor:"pointer" ,fontSize:"20px",color:"#2A0944"}} onClick={()=>dispatch(increase(item))} >+</Box>
                                    </Box>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
        </Grid>
        <Grid item xs={12} md={3} m={10} >
            <Box component={Paper} >
                <Typography textAlign="center" >Checking Out</Typography>
                <Box px={2} m={2} display="flex" justifyContent="space-between" >
                <Typography component="p">Total Price:</Typography>
                <Typography>${items.total}</Typography>
                </Box>
                <Box px={2} py={5}display="flex" justifyContent="space-evenly" >
                    <CustomButton variant='contained' size='small' onClick={()=>dispatch(checkOut())} >CheckOut</CustomButton>
                    <CustomButton variant='contained' size='small' onClick={()=>dispatch(clear())} >Clear All </CustomButton>
                </Box>
                {items.checkOut &&  <Typography px={5} pb={3} >thank you For Buying please back to home</Typography> }
                {!items.counter  && <Typography px={5} pb={3} ><Link to="/" style={{color:"black",textDecoration:"none"}} >Back To Home</Link></Typography> }
            </Box>
        </Grid>
        </Grid>
    </Container>
  )
}

export default CartPage