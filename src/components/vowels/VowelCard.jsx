import React, {useState, useEffect} from 'react'
import ReactCardFlip from 'react-card-flip';
import { GetVowels } from '../../services/functions';

function VowelCard() {
    const [isFlipped, setIsFlipped] = useState(false);
    const [vowels, setVowels] = useState([]);

    const handleClick = () => {
          setIsFlipped(!isFlipped);
        }

        const getAllVowels = async() =>{
            const allVowels = await GetVowels();
            console.log(allVowels);
            setVowels(allVowels);
          }
        
          useEffect( () => {
            getAllVowels()
          }, [])
        
    
  return (
     <>
    <div className='m-3'>
      <ReactCardFlip isFlipped={isFlipped}>
        <p className= "text-white text-center p-3 font-weight-bolder display-1 mx-auto d-block frontImage" onClick = { () => handleClick()}>{upper}</p> 

        <video className='backVideo' key={id} controls autoplay preload="auto">
            <source src={backVideo} type="video/mp4"/>
        </video>
      </ReactCardFlip>
    </div>
    </>
  )
}

export default VowelCard