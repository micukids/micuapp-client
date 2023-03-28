import React, { useEffect, useState } from 'react'
import Suggestion from './Suggestion'
import start_2 from "../../assets/img/Star_2.png";
import { GetSuggestions } from '../../services/functions';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import SwiperCore, { Navigation, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode'
import 'swiper/css';
import 'swiper/css/navigation';

SwiperCore.use([Navigation, A11y]);

function SuggestionsBoard() {
    const [suggestions, setSuggestions] = useState([]);
    const getAllSuggestion = async() =>{
      const allSuggestion = await GetSuggestions();
      setSuggestions(allSuggestion);
    }
  
    useEffect( () => {
        getAllSuggestion()
    }, [])


  return (
    <div className= 'bg-suggestions-container d-flex justify-content-center align-items-center  mt-5 mb-4'>
        <div className="text-suggestions">
        <img src={start_2} alt="Estrella de color amarillo" />
        <p>RECOMENDADOS</p>
        </div>
        <div className='container d-flex py-4 px-4 justify-content-center align-items-center ' >
          <Swiper
            freeMode={true}
            grabCursor={true}
            modules={[FreeMode]}
            className="mySwipper"
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            breakpoints={{
              0: {
                slidesPerView:1,
                spaceBetween:30,
              },
              768:{
                slidesPerView:2,
                spaceBetween:10,
              },
              992:{
                slidesPerView:3,
                spaceBetween:10,
              },
            }}
          >
            {suggestions.map((suggestion, index) => (
            <SwiperSlide key={index}>
              <Suggestion {...suggestion}/>
            </SwiperSlide>
            ))}
          </Swiper>

        </div>
    </div>
  )
}

export default SuggestionsBoard