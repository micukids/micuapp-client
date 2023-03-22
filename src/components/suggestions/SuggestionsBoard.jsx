import React, { useEffect, useState } from 'react'
import Suggestion from './Suggestion'
import start_2 from "../../assets/img/Star_2.png";
import { GetSuggestions } from '../../services/functions';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

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
    <div className= 'bg-suggestions-container d-flex justify-content-center align-items-center bg-light mt-5 mb-4'>
        <div className="text-suggestions">
        <img src={start_2} alt="Estrella de color amarillo" />
        <p>RECOMENDADOS</p>
        </div>
        <div className='container py-4 px-4 justify-content-center ' >
          <Swiper
            freeMode={true}
            grabCursor={true}
            modules={[FreeMode]}
            className="mySwipper"
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            breakpoints={{
              0: {
                slidesPerView:1,
                spaceBetween:30,
              },
              577:{
                slidesPerView:2,
                spaceBetween:30,
              },
              992:{
                slidesPerView:3,
                spaceBetween:15,
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