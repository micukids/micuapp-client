import React, {useState} from 'react'
import ReactCardFlip from 'react-card-flip';
import "./FlipCard.css"


function FlipCard({id, letter, backVideo}) {

    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
          setIsFlipped(!isFlipped);
        }
    
  return (
    <div>
    <ReactCardFlip isFlipped={isFlipped}>
        <p className= "frontImage" onClick = { () => handleClick()}>{letter}</p>

        <video key={id} src={backVideo} alt="Back face"/>
    </ReactCardFlip>
  </div>
  )
}

export default FlipCard