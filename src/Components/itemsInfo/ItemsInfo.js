import { Box, CircularProgress, Container, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getItem } from '../../Redux/products/productsAction'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const ItemsInfo = () => {
    const {id} = useParams()
    const items = useSelector(state=>state.slideState)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getItem())
    },[])
    const item = items.product[id-1]

    if(!item) return <CircularProgress />
  return (
    <Container maxWidth="lg" sx={{padding:"50px 0"}} >
        <Grid container spacing={12} >
            <Grid item xs={12} md={6} >
                <img src={item.image} style={{width:"280px" }} />
            </Grid>
            <Grid item xs={12} md={6} >
                <Typography variant='h2' component='p' fontSize='35px' fontWeight={700} >{item.title}</Typography>
                <Typography variant='p' pt={4} component="p">{item.description}</Typography>
                <Box display="flex" alignItems="center" >
                    <Typography variant='p' component="p">${item.price}</Typography>
                    <LocalOfferIcon sx={{color:"#757575",margin:"20px 5px"}} />
                </Box>

            </Grid>

        </Grid>
    </Container>
  )
}

export default ItemsInfo