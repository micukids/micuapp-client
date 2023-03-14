import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import MemoryCard from '../../components/memory/MemoryCard';
import { GetVowels } from '../../services/functions';
import {shuffleArray} from '../../utils/index'
import MainButton from '../../components/mainButton/MainButton'

function MemoryBoard() {
  const [vowels, setVowels] = useState([]);
  const [firstCard, setFirstCard]= useState({})
  const [secondCard, setSecondCard]= useState({})
  const [unFlippedCards, setUnFlippedCards] = useState([]);
  const [disabledCards, setDisabledCards] =useState([]);

  const getAllVowels = async() =>{
      const allVowels = await GetVowels();
      const shuffleCards = shuffleArray(allVowels);
      console.log(allVowels);
      console.log(shuffleCards);
      const memoryCards = shuffleCards.slice(0, 3);
      const duplicateMemoryCards = memoryCards.reduce(
        (accumulator, currentValue) => [...accumulator, currentValue, currentValue],
        []
      );
      setVowels(shuffleArray(duplicateMemoryCards))
    }

    useEffect( () => {  
      getAllVowels()
    }, [])

    useEffect( () => {  
      checkForMatch()
    }, [secondCard])

    const flipCard = (letter, number)=>{
      if (firstCard.letter === letter && firstCard.number === number){
        return 0;
      }
      if (!firstCard.letter){
        setFirstCard({letter, number})
      } else if (!secondCard.letter){
        setSecondCard({letter, number})
      }
      return 1;
    }

    const checkForMatch = () => {
      if (firstCard.letter && secondCard.letter){
        const match = firstCard.letter === secondCard.letter;
        match ? disableCards() : unFlipCards();
      }
    }

    const disableCards = () => {
      setDisabledCards([firstCard.number, secondCard.number]);
      resetCards();
    };

    const unFlipCards = () => {
      setUnFlippedCards([firstCard.number, secondCard.number]);
      resetCards();
    };


    const resetCards = () => {
      setFirstCard({});
      setSecondCard({});
    }

    const reloadGame = () => {
      window.location.reload(true);
    }

  return (
    <Layout>
      <div className='memory-board-container'>

        <div className='memory-card-container'>
          {
            vowels.map((vowelcard, index)=>(
              <MemoryCard 
              {...vowelcard} 
              key={index} 
              number={index}
              flipCard={flipCard} 
              unFlippedCards={unFlippedCards}
              disabledCards={disabledCards}
              />
              ))
            }
        </div>
        <MainButton text="Volver a jugar!" onClick={reloadGame} />
      </div>
    </Layout>
  )
}

export default MemoryBoard