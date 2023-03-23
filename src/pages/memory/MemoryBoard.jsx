import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import MemoryCard from '../../components/memory/MemoryCard';
import { GetLetters } from '../../services/functions';
import {shuffleArray} from '../../utils/index'
import MainButton from '../../components/mainButton/MainButton'
import confetti from 'canvas-confetti';
import start_2 from '../../assets/img/Star_2.png'
import MusicButton from '../../components/musicbutton/MusicButton';

function MemoryBoard() {
  const [musicIsPlaying, setMusicIsPlaying] = useState(false);
  const [cards, setCards] = useState([]);
  const [firstCard, setFirstCard]= useState({})
  const [secondCard, setSecondCard]= useState({})
  const [unFlippedCards, setUnFlippedCards] = useState([]);
  const [disabledCards, setDisabledCards] =useState([]);
  const [gameOver, setGameOver] =useState([]);

  const getAllLetters = async() =>{
      const allLetters = await GetLetters();
      const shuffleCards = shuffleArray(allLetters);
      const memoryCards = shuffleCards.slice(0, 3);
      const duplicateMemoryCards = memoryCards.reduce(
        (accumulator, currentValue) => [...accumulator, currentValue, currentValue],
        []
      );
        setCards(shuffleArray(duplicateMemoryCards))
    }

  useEffect( () => {  
      getAllLetters()
    }, []) 

    useEffect( () => {  
      checkForMatch()
    }, [secondCard])

    useEffect(() => {
      if (gameOver.length === cards.length && cards.length > 0){
        confetti({
          particleCount: 200,
          startVelocity: 30,
          spread: 300,
          gravity: 1.5,
          origin: {y:0}
        });
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
     window.location = "/memorycard"
    }

    const handleMusicClick = (audioReference) => {
      setMusicIsPlaying(audioReference.current.paused);
      audioReference.current.paused ? audioReference.current.play() : audioReference.current.pause()
    }

    
  return (
    <Layout>
      <div className='memory-board-container'>
        <div className='button-position'>
          <MusicButton onClick={handleMusicClick} musicIsPlaying={musicIsPlaying} />
        </div>
          <div className='custom-text-memory'>
            <img src={start_2} alt="Estrella de color amarillo" />
            <p>MEMORY  <span>CARDS</span></p>
          </div>

        <div className='memory-card-container'>
          {
            cards.map((card, index)=>(
              <MemoryCard 
              {...card} 
              key={index} 
              number={index}
              flipCard={flipCard} 
              unFlippedCards={unFlippedCards}
              disabledCards={disabledCards}
            
              />
              ))
            }
        </div>
        <MainButton text="Nuevas Cartas" onClick={() => startNewGame()} className="mb-2 mt-4" />
      </div>
    </Layout>
  )
}

export default MemoryBoard