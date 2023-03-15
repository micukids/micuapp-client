import React, { useEffect, useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import Micu_cara from '../../assets/img/Micu_mira_der.png'


function MemoryCard({letter, id, flipCard, unFlippedCards, disabledCards, number }) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [hasEvent, serHasEvent] = useState (true);

    useEffect(() =>{
        if (unFlippedCards.includes(number)){
            setTimeout(() => setIsFlipped(false), 700)
        }
    }, [unFlippedCards])

    useEffect(() => {
        if (disabledCards.includes(number)){
            serHasEvent(false)
        }
    }, [disabledCards])

    const handleClick = () => {
       const value = flipCard(letter, number)
       if (value !== 0){
           setIsFlipped(!isFlipped);

       }
      }
      

  return (
    <div className='memory-card'>
        <ReactCardFlip isFlipped={isFlipped}>
            <div className='backface-image-container' onClick={hasEvent ? handleClick : null}>
                <img src={Micu_cara} alt="imagen posterior de la carta" />
            </div>
            <p className= "text-white text-center padding-p font-weight-bolder display-1 mx-auto d-block frontImage" onClick={hasEvent ? handleClick : null}>{letter}</p>
        </ReactCardFlip>
    </div>
  )
}

export default MemoryCard