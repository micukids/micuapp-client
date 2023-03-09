import React, {useState, useEffect} from 'react'
import { GetVowels } from '../../services/functions';
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
    <div>
        {vowels.map((vowel, index) => (
        <VowelCard {...vowel} key={index} backVideo={vowel.video} />
         ))}   
    </div>
  )
}

export default VowelsContainer