import React, {useState, useEffect} from 'react'
import FlipCard from '../../components/flipCard/FlipCard';
import { GetLetters } from '../../services/functions';
import "./FlipCardsPage.css";
import Layout from "../../components/layout/Layout";
import NameCont from '../../components/name/NameCont';
import start_2 from '../../assets/img/Star_2.png'
import MuteButton from '../../components/mute/Mute'
import Micu_cara from '../../assets/img/Micu_cara.png'
import celebracion from'../../assets/sounds/celebracion.mp3'
import FlipAlert from '../../components/flipAlert/FlipAlert';


const FlipCardsPage = () => {
  const [cards, setCards] = useState([]);
  const getAllCards = async() =>{
    const allCards = await GetLetters();
    setCards(allCards);
  }

  useEffect( () => {
    getAllCards()
  }, [])

  return (
    <>
    <Layout>
      <div className= 'bg-vowels-container d-flex justify-content-center align-items-center bg-light' >
        <div className='mute-button-container'>
          <MuteButton/>
        </div>
          <NameCont/> 
          <div className='text-vowels'>
            <img src={start_2} alt="Estrella de color amarillo" />
            <p>FLIP <span>CARDS</span></p>
          </div>
          
          <div className = 'd-flex flex-wrap justify-content-center align-items-center text-center'>
            {cards.map((card, index) => (<FlipCard {...card} key={index} backVideo={card.video} /> ))}
            <FlipAlert front= {Micu_cara} back={celebracion}/>  
          </div>
      </div>
    </Layout>
    </>
  )
}

export default FlipCardsPage
