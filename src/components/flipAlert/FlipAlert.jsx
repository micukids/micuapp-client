import React from 'react'
import ReactCardFlip from 'react-card-flip'
import {useState, useRef} from 'react'

function FlipAlert({front}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const videoReference = useRef(null);

  const handleClick = (shouldPlay) => {
        setIsFlipped(!isFlipped);
        shouldPlay ? videoReference.current.play() : videoReference.current.pause()
      }
  
    const micuBack = 'https://play.micukids.com/play/flipcards/back/micu.mp4'

  return (
    <>
    <div className='m-3 card-cursor'>
      <ReactCardFlip isFlipped={isFlipped}>
      <img src={front} alt="micu face" className= "text-white text-center p-4 font-weight-bolder display-1 mx-auto d-block frontImage" onClick = { () => handleClick(true)}/>
      <video
          className="backVideo"
          ref={videoReference}
          onClick={() => handleClick(false)}
        >
          <source src={micuBack} type="video/mp4"/>
      </video>
      </ReactCardFlip>
    </div>
    </>
  )
}

export default FlipAlert