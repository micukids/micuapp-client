import React, { useEffect, useState } from 'react'
import Suggestion from './Suggestion'
import start_2 from "../../assets/img/Star_2.png";
import { GetSuggestions } from '../../services/functions';

function SuggestionsBoard() {
    const [suggestions, setSuggestions] = useState([]);
    const getAllSuggestion = async() =>{
      const allSuggestion = await GetSuggestions();
      setSuggestions(allSuggestion);
    }
  
    useEffect( () => {
        getAllSuggestion()
    }, [])
  return (
    <div className= 'bg-suggestions-container d-flex justify-content-center align-items-center bg-light'>
        <div className="text-suggestions">
        <img src={start_2} alt="Estrella de color amarillo" />
        <p>RECOMENDADOS</p>
        </div>
        <div className='d-flex flex-wrap justify-content-center align-items-center text-center'>
        {suggestions.map((suggestion, index) => (<Suggestion {...suggestion} key={index} />))}

        </div>
    </div>
  )
}

export default SuggestionsBoard