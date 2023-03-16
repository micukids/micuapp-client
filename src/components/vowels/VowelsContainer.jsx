import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { GetVowels } from '../../services/functions';
import MainButton from '../mainButton/MainButton';
import VowelCard from './VowelCard';
import start_2 from '../../assets/img/Star_2.png'
import confetti from 'canvas-confetti';



function VowelsContainer() {
    const [vowels, setVowels] = useState([]);

    const getAllVowels = async() =>{
      let allVowels = await GetVowels();
      allVowels.map(vowel => {
        vowel.isFlipped = false;
        return vowel;
      })
      console.log(allVowels)
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

    
  return (
    <div className='bg-vowels-container'>
      <div className='text-vowels'>
        <img src={start_2} alt="Estrella de color amarillo" />
        <p>FLIP <span>CARDS</span></p>
      </div>
    <div className='vowel-cards-container'>
        {vowels.map((vowel, index) => (
        <VowelCard {...vowel} key={index} backVideo={vowel.video} onFlipped={onFlipped}/>
         ))}   
    </div>
    <Link to="/access"><MainButton class='bt' text='Aprende todo el abecedario'/></Link>
    </div>

  )
}

export default VowelsContainer