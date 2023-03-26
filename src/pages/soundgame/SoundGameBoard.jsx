import React, { useEffect, useState } from 'react'
import start_2 from '../../assets/img/Star_2.png'
import Layout from "../../components/layout/Layout";
import SoundCard from '../../components/soundgame/SoundCard';
import { GetLetters } from '../../services/functions';
import NameCont from '../../components/name/NameCont'
import MuteButton from '../../components/mute/Mute'

function SoundGameBoard() {
        const [cards, setCards] = useState([]);
        const getAllCards = async() =>{
          const allCards = await GetLetters();
          setCards(allCards);
        }
      
        useEffect( () => {
          getAllCards()
        }, [])

  return (
    <Layout>
    <div className= 'bg-vowels-container d-flex justify-content-center align-items-center bg-light'>
        <div className='mute-button-container'>
              <MuteButton/>
            </div>
        <NameCont/>
       <div className='text-vowels'>
            <img src={start_2} alt="Estrella de color amarillo" />
            <p>SOUND <span>CARDS</span></p>
        </div> 
        <div className = 'd-flex flex-wrap justify-content-center align-items-center text-center gap-2 mb-4'>
            {cards.map((card, index) => (<SoundCard {...card} key={index} /> ))}   
          </div>
    </div>
    </Layout>
  )
}

export default SoundGameBoard