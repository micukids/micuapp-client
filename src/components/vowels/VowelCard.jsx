import React, {useState} from 'react'
import ReactCardFlip from 'react-card-flip';


function VowelCard({id,backVideo, upper}) {
    const [isFlipped, setIsFlipped] = useState(false);


    const handleClick = () => {
          setIsFlipped(!isFlipped);
        }

    
  return (
     <>
    <div className='m-3'>
      <ReactCardFlip isFlipped={isFlipped}>
        <p className= "text-white text-center p-3 font-weight-bolder display-1 mx-auto d-block frontImage" onClick = { () => handleClick()}>{upper}</p> 

        <video className='backVideo' key={id} controls autoPlay preload="auto" >
            <source src={backVideo} type="video/mp4"/>
        </video>
      </ReactCardFlip>
    </div>
    </>
  )
}

export default VowelCard