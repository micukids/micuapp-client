import React, { useEffect, useState } from 'react'
import MainTitle from '../mainTitle/MainTitle'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import SwiperCore, { Navigation, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode'
import 'swiper/css';
import 'swiper/css/navigation';
import { GetVowels } from '../../services/functions';
import Download from './Download';

SwiperCore.use([Navigation, A11y]);

function DownloadBoard() {
    const [vowels, setVowels] = useState([]);

    const getAllVowels = async() =>{
      const allVowels = await GetVowels();
      setVowels(allVowels);
    }

    useEffect( () => {
        getAllVowels()
      }, [])


  return (
    <div className= 'bg-suggestions-container d-flex justify-content-center align-items-center  mt-5 mb-4'>
        <MainTitle text='DESCARGABLES' text2=''/>
    <div className='container py-4 px-4 justify-content-center ' >
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
          577:{
            slidesPerView:2,
            spaceBetween:30,
          },
          992:{
            slidesPerView:3,
            spaceBetween:10,
          },
        }}
      >
        {vowels.map((vowel, index) => (
        <SwiperSlide key={index}>
          <Download {...vowel}/>
        </SwiperSlide>
        ))}
      </Swiper>

    </div>
</div>
  )
}

export default DownloadBoard