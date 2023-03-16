import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import MemoryCard from '../../components/memory/MemoryCard';
import { GetVowels } from '../../services/functions';
import {shuffleArray} from '../../utils/index'
import MainButton from '../../components/mainButton/MainButton'
import confetti from 'canvas-confetti';

function MemoryBoard() {
  const [vowels, setVowels] = useState([]);
  const [firstCard, setFirstCard]= useState({})
  const [secondCard, setSecondCard]= useState({})
  const [unFlippedCards, setUnFlippedCards] = useState([]);
  const [disabledCards, setDisabledCards] =useState([]);
  const [gameOver, setGameOver] =useState([]);

  const getAllVowels = async() =>{
      const allVowels = await GetVowels();
      const shuffleCards = shuffleArray(allVowels);
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

    useEffect(() => {
      if (gameOver.length === vowels.length && vowels.length > 0){
        confetti({
          particleCount: 200,
          startVelocity: 30,
          spread: 300,
          gravity: 1.5,
          origin: {y:0}
        })
      }
    }, [gameOver])

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
        if (match) {
          setGameOver((currentValue) => [...currentValue, firstCard.number, secondCard.number]);
          
          disableCards() 
        }else{
          unFlipCards();
        } 
      }
    }
    console.log(gameOver);

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

    const startNewGame = () => {
      resetCards();
      setUnFlippedCards([]);
      setDisabledCards([]);
      setTimeout(() => getAllVowels(), 1000)
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
        <MainButton text="Nuevas Cartas" onClick={() => startNewGame()} />
      </div>
    </Layout>
  )
}

export default MemoryBoard