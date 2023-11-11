import React, { useEffect, useReducer } from 'react'
import "./Hero.scss"
import { Container } from '../../utils/Container'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { apiInstance } from '../../api/api';
import { Link } from 'react-router-dom';

const reducer = (state, action) =>{
    return action
}

const Hero = () => {
    const [state, dispatch] = useReducer(reducer,[])

    useEffect(()=>{
       try {
        apiInstance("/coins/")
        .then(res => {
            console.log(res.data);
            dispatch(res.data);
        })
       
       } catch (error) {
        console.log(error);
       }
    },[])
    
  return (
    <div className='hero'>
        <Container>
            <div className="hero__content">
                <h2>CRYPTOFOLIO WATCH LIST</h2>
                <p>Get all the Info regarding your favorite Crypto Currency</p>
                <Swiper
                    spaceBetween={40}
                    slidesPerView = {4}
                    startedSlides={true}
                    autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    }}
                    // pagination={{
                    // clickable: true,
                    // }}
                    // navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        state.map((e,i)=>
                            <SwiperSlide key={e.id} className='swiper-slide'>
                                <Link to={`/${e.id}`} className='link'>
                                    <img src={e.image.large} alt="" />
                                    <div className="currency">
                                        <p>{e.symbol} {e.market_data.price_change_percentage_24h.toFixed(2) > 0 ?  <span className='green'>+{e.market_data.price_change_percentage_24h.toFixed(2)} %</span>: e.market_data.price_change_percentage_24h.toFixed(2) < 0 ? <span className='red'>{e.market_data.price_change_percentage_24h.toFixed(2)} %</span> : <span className='gray'>{0} %</span>}</p>
                                        <p>$ {e.market_data.current_price.usd}</p>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        )
                    }
                    
                </Swiper>
            </div>
        </Container>
    </div>
  )
}

export default Hero