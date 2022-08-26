import React, { useEffect } from 'react'
import { LinearProgress , Container, Box, Divider } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { getCato} from '../../Redux/category/catoAction'
import { Swiper, SwiperSlide } from 'swiper/react';
import CardSlider from '../Shared/CardSlider';
import "swiper/css/pagination";
import 'swiper/css';

const SliderCato = () => {
    const item = useSelector(state=>state.catoState)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getCato())
        
    },[])


    if(!item || item.load ) return (
        <Container maxWidth="xl">
            <div style={{width:"100%",marginTop:"80px"}} >
            <LinearProgress  sx={{textAlign:"center",width:"50%" , color:"#2A0944"}} />
            </div>
        </Container>
    )

    
  return (
    <Box mt={10}>
    <Divider variant='middle' >Jelewery</Divider>
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
    {item.items.map(item=>(
        <SwiperSlide key={item.id}>
            <CardSlider price={item.price} rate={item.rating.rate} image={item.image} title={item.title} id={item.id} item={item} />
        </SwiperSlide>
    ))}
  </Swiper>
</Box>
  )
}

export default SliderCato