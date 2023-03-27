import React from 'react'
import ReactCardFlip from 'react-card-flip'
import {useState, useRef} from 'react'

function FlipAlert({front,back}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const videoReference = useRef(null);

  const handleClick = (shouldPlay) => {
        setIsFlipped(!isFlipped);
        shouldPlay ? videoReference.current.play() : videoReference.current.pause()
      }

  return (
    <>
    <div className='m-3 card-cursor'>
      <ReactCardFlip isFlipped={isFlipped}>
      <img src={front} alt="micu face" />
        <video
            className="backVideo"
            ref={videoReference}
            onClick={() => handleClick(false)}
          >
            <source src={back} type="video/mp4"/>
        </video>
      </ReactCardFlip>
    </div>
    </>
  )
}

export default FlipAlert