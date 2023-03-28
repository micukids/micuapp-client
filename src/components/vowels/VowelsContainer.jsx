import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { GetVowels } from '../../services/functions';
import MainButton from '../mainButton/MainButton';
import VowelCard from './VowelCard';
import start_2 from '../../assets/img/Star_2.png'
import confetti from 'canvas-confetti';
import MuteButton from '../mute/Mute';



function VowelsContainer() {
    const [vowels, setVowels] = useState([]);

    const getAllVowels = async() =>{
      let allVowels = await GetVowels();
      allVowels.map(vowel => {
        vowel.isFlipped = false;
        return vowel;
      })
      setVowels(allVowels);
    }

    const onFlipped = (vowelId) => {
      setVowels(oldVowels => {
        const newVowels = [...oldVowels]
        const vowelIndex = newVowels.findIndex(vowel => vowel.id === vowelId);
        if (vowelIndex >= 0) {
          newVowels[vowelIndex].isFlipped = !newVowels[vowelIndex].isFlipped
        }
        return newVowels
      });
    }
    
    useEffect( () => {
      getAllVowels()
    }, [])

    useEffect(() => {
      const allFlipped = vowels.every(vowel => vowel.isFlipped);
      if (vowels.length && allFlipped) {
        confetti({
          particleCount: 200,
          startVelocity: 30,
          spread: 300,
          gravity: 1.5,
          origin: {y:0}
        })
      }
    }, [vowels])

    
        let alphabetAccess = '';
        if (localStorage.getItem('auth_token')){
          alphabetAccess = (<Link to="/flipcard"><MainButton class='bt' text='Aprende todo el abecedario'/></Link>)
        }else{
          alphabetAccess = (<Link to="/login"><MainButton class='bt' text='Aprende todo el abecedario'/></Link>)
        }


  return (
    <div className='bg-vowels-container'>
      <div className='mute-button-container'>
        <MuteButton/>
      </div>
      <div className='text-vowels'>
        <img src={start_2} alt="Estrella de color amarillo" />
        <p>FLIP <span>CARDS</span></p>
      </div>
    <div className='vowel-cards-container' data-test='vowel-container'>
        {vowels.map((vowel, index) => (
        <VowelCard {...vowel} key={index} backVideo={vowel.video} onFlipped={onFlipped}/>
         ))}   
    </div>
      {alphabetAccess}
    </div>

  )
}

export default VowelsContainer