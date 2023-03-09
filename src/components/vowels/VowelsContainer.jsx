import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { GetVowels } from '../../services/functions';
import MainButton from '../mainButton/MainButton';
import VowelCard from './VowelCard';



function VowelsContainer() {
    const [vowels, setVowels] = useState([]);

    const getAllVowels = async() =>{
        const allVowels = await GetVowels();
        setVowels(allVowels);
      }
    
      useEffect( () => {
        getAllVowels()
      }, [])
    
  return (
    <div className='bg-vowels-container'>
    <div className='vowel-cards-container'>
        {vowels.map((vowel, index) => (
        <VowelCard {...vowel} key={index} backVideo={vowel.video} />
         ))}   
    </div>
    <Link to="/flipcard"><MainButton class='bt' text='Aprende todo el abecedario'/></Link>
    </div>

  )
}

export default VowelsContainer