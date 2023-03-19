import React, {useState, useEffect} from 'react'
import FlipCard from '../../components/flipCard/FlipCard';
import { GetLetters } from '../../services/functions';
import "./FlipCardsPage.css";
import Layout from "../../components/layout/Layout";
import NameCont from '../../components/name/NameCont';
import start_2 from '../../assets/img/Star_2.png'

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
          <NameCont cards={cards} /> 
          <div className='text-vowels'>
            <img src={start_2} alt="Estrella de color amarillo" />
            <p>FLIP <span>CARDS</span></p>
          </div>
          
          <div className = 'd-flex flex-wrap justify-content-center align-items-center text-center'>
            {cards.map((card, index) => (<FlipCard {...card} key={index} backVideo={card.video} /> ))}   
          </div>

      </div>
    </Layout>
    </>
  )
}

export default FlipCardsPage
