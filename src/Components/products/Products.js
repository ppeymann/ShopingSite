import { Box, Container, Grid, Pagination } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getItem } from '../../Redux/products/productsAction'
import CardSlider from '../Shared/CardSlider'

const Products = () => {

    const items = useSelector(state=>state.slideState)
    const dispatch = useDispatch()

    const [currentpage , setCurrentpage] = useState(1)
    const [cartPerPage , setCartPerPage] = useState(5)

    useEffect(()=>{
        dispatch(getItem())
        window.scrollTo(0, 0)
        
    },[])
    const product = items.product
    console.log(product)
    const lastCart = currentpage * cartPerPage
    const firstCart = lastCart - cartPerPage
    const cartsInPage = product.slice(firstCart , lastCart)

  return (
    <Container>
        <Grid container>
        {
            cartsInPage.map(cart=>(
                <Grid item xs={12} md={6} key={cart.id} >
                <CardSlider
                 image={cart.image} 
                 title={cart.title}
                 id={cart.id} 
                 price={cart.price} 
                 rate={cart.rating.rate} 
                 item={cart}  />
                </Grid>
            ))
        }
        <Grid item xs={12} display="flex" alignItems="center" justifyContent="center" >
            <Box p={5} >
            <Pagination
               count={4}
               onChange={(e,p)=>setCurrentpage(p)}
               />
            </Box>
        </Grid>
        </Grid>
 
    </Container>
  )
}

export default Products