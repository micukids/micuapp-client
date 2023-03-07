import React, {useState, useEffect} from 'react'
import FlipCard from '../../components/flipCard/FlipCard';
import { GetLetters } from '../../services/functions';

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
    <div className = 'container d-flex justify-content-between'>
    {cards.map((card, index) => (
               <FlipCard {...card} key={index} backVideo={card.video} /> 
                ))}   
    </div>
    </>
  )
}

export default FlipCardsPage
