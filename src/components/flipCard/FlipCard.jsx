import React, {useState, useRef} from 'react'
import ReactCardFlip from 'react-card-flip';
import '../../styles/Styles.css';

function FlipCard({id, letter, backVideo}) {
    const [isFlipped, setIsFlipped] = useState(false);
    const videoReference = useRef(null);

    const handleClick = (shouldPlay) => {
          setIsFlipped(!isFlipped);
          shouldPlay ? videoReference.current.play() : videoReference.current.pause()
        }
    
  return (
    <>
    <div className='m-3'>
      <ReactCardFlip isFlipped={isFlipped}>
        <p className= "text-white text-center p-4 font-weight-bolder display-1 mx-auto d-block frontImage" onClick = { () => handleClick(true)}>{letter}</p>

        <video
            className="backVideo"
            key={id}
            ref={videoReference}
            onClick={() => handleClick(false)}
          >
            <source src={backVideo} type="video/mp4" />
        </video>


      </ReactCardFlip>
    </div>
    </>
  )
}

export default FlipCard