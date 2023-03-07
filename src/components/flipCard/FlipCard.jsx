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
        <ReactCardFlip  isFlipped={isFlipped}>
            
                <p className= "text-white display-1 rounded mx-auto d-block frontImage" onClick = { () => handleClick()}>{letter}</p>
                <video key={id} src={backVideo} alt="Back face"/>
     
        </ReactCardFlip>
    </>
  )
}

export default FlipCard