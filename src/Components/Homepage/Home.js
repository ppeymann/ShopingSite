import React, { useEffect } from 'react'
import { LinearProgress , Container, Box, Divider } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { getItem } from '../../Redux/products/productsAction'
import { Swiper, SwiperSlide } from 'swiper/react';
import CardSlider from '../Shared/CardSlider';
import "swiper/css/pagination";
import 'swiper/css';
import SliderCato from '../SliderCato/SliderCato';
const Home = () => {
    const products = useSelector(state=>state.slideState)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getItem())
        
    },[])

    if(!products || products.load ) return (
        <Container maxWidth="xl">
            <div style={{width:"100%"}}>
            <LinearProgress  sx={{textAlign:"center",width:"50%" , color:"#2A0944"}} />
            </div>
        </Container>
    )

    
  return (
      <>
    <Container maxWidth="lg" >
    <Box mt={2} >
    <Divider variant='middle' >New Items</Divider>
    <Swiper
  spaceBetween={5}
  slidesPerView={1}
  breakpoints={{
    640: {
        slidesPerView: 1,
      },
      768:{
          slidesPerView:2
      },
      1000:{
        slidesPerView:3
      }
  }}

   >
    {products.product.map(item=>(
        <SwiperSlide key={item.id}>
            <CardSlider price={item.price} rate={item.rating.rate} image={item.image} title={item.title} id={item.id} item={item} />
        </SwiperSlide>
    ))}
  </Swiper>
  <SliderCato />
</Box>

    </Container>

 </>
  )
}

export default Home