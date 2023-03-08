import React, {useState, useEffect} from 'react'
import FlipCard from '../../components/flipCard/FlipCard';
import { GetLetters } from '../../services/functions';
import "./FlipCardsPage.css"

const FlipCardsPage = () => {
  const [cards, setCards] = useState([]);

  const getAllCards = async() =>{
    const allCards = await GetLetters();
    console.log(allCards);
    setCards(allCards);
  }

  useEffect( () => {
    getAllCards()
  }, [])

  console.log(cards);
  return (
    <>
    <div className='contr-main'>
      <div className='contr-cards'>
        <div className = 'd-flex flex-wrap text-center'>
        {cards.map((card, index) => (<FlipCard {...card} key={index} backVideo={card.video} /> ))}   
      </div>
      </div>
    </div>
    </>
  )
}

export default FlipCardsPage
