import React, {useState} from 'react'
import ReactCardFlip from 'react-card-flip';
import '../../styles/Styles.css';
import ReactPlayer from 'react-player';

function FlipCard({id, upper, backVideo}) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
          setIsFlipped(!isFlipped);
        }
    
  return (
    <>
    <div className='m-3'>
      <ReactCardFlip isFlipped={isFlipped}>
        <p className= "text-white text-center p-4 font-weight-bolder display-1 mx-auto d-block frontImage" onClick = { () => handleClick()}>{upper}</p>

        <ReactPlayer
        className='backVideo'
        width= '170px'
        height= '170px'
        url={backVideo}
        controls
        //playing
        />
      
        {/*<video className='backVideo' key={id} controls autoPlay preload="auto">
            <source src={`${backVideo}?autoplay=1`} type="video/mp4"/>
          </video>*/}

      </ReactCardFlip>
    </div>
    </>
  )
}

export default FlipCard