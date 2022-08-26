import { Box, CircularProgress, Container, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getItem } from '../../Redux/products/productsAction'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import styled from 'styled-components'

const ImageCom = styled.img`
width: 280px;
@media screen and (max-width:768px){
    width: 150px;
}
`

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
    <Container maxWidth="lg" sx={{padding:"50px 20px 50px 20px"}} >
        <Grid container spacing={12} >
            <Grid item xs={12} md={6}  display='flex' justifyContent="center" alignItems="center" >
                <ImageCom src={item.image} />
            </Grid>
            <Grid item xs={12} md={6} display='flex' justifyContent="center" alignItems="center" flexDirection="column" >
                <Box textAlign="center" display='flex' justifyContent="center" alignItems="center" flexDirection="column" >
                <Typography variant='h2' component='p' fontSize='35px' fontWeight={700} >{item.title}</Typography>
                <Typography variant='p' pt={4} component="p">{item.description}</Typography>
                </Box>
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