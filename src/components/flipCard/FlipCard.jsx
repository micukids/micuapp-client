import React, {useState} from 'react'
import ReactCardFlip from 'react-card-flip';
import "./FlipCard.css"


function FlipCard({id, letter, backVideo}) {

    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
          setIsFlipped(!isFlipped);
        }
    
  return (
    <>
    <div className='m-3'>
      <ReactCardFlip isFlipped={isFlipped}>
        <p className= "text-white text-center p-3 font-weight-bolder display-1 rounded mx-auto d-block frontImage" onClick = { () => handleClick()}>{letter}</p> 
        <iframe className = 'backVideo' key={id} src={backVideo} allow='autoplay' alt="Back face"/>
      </ReactCardFlip>
    </div>
  </>
  )
}

export default FlipCard