import React, {useState, useEffect} from 'react'
import { getLettersName } from '../../services/functions';
import start_2 from '../../assets/img/Star_2.png'
import confetti from 'canvas-confetti';
import NameCard from './NameCard';

function NameContainer() {
    const [lettersName, setLettersName] = useState([]);

    const getAllLettersName = async() =>{
      let allLettersName = await getLettersName();
      allLettersName.map(letterName => {
        letterName.isFlipped = false;
        return letterName;
      })
      console.log(allLettersName)
      setLettersName(allLettersName);
    }

    const onFlipped = (letterNameId) => {
        setLettersName(oldLetters => {
        const newLetters = [...oldLetters]
        const letterIndex = newLetters.findIndex(letter => letter.id === letterNameId);
        if (letterIndex >= 0) {
          newLetters[letterIndex].isFlipped = !newLetters[letterIndex].isFlipped
        }
        return newLetters
      });
    }
    
    useEffect( () => {
        getAllLettersName()
    }, [])

    useEffect(() => {
      const allFlipped = lettersName.every(vowel => vowel.isFlipped);
      if (lettersName.length && allFlipped) {
        confetti({
          particleCount: 200,
          startVelocity: 30,
          spread: 300,
          gravity: 1.5,
          origin: {y:0}
        })
      }
    }, [lettersName])

    const {handleName} = this.props

  return (
    <div className='bg-vowels-container d-flex'>

      <div className='container w-50 justify-content-center align-items-center'>
        <input className='w-100 h-25' type="text" placeholder='Escribe tu nombre aquí ...' name='kidsName'/>
        <button className='btn btn-primary w-50 mt-3' onClick={handleName}>Desplegar mi nombre</button>
      </div>

      <div className='text-vowels'>
        <img src={start_2} alt="Estrella de color amarillo" />
        <p>FLIP <span>CARDS</span></p>
      </div>
      <div className='vowel-cards-container'>
          {lettersName.map((letter, index) => (
          <NameCard {...letter} key={index} backVideo={letter.video} onFlipped={onFlipped}/>
          ))}   
      </div>
    </div>

  )
}

export default NameContainer