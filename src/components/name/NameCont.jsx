import start_2 from '../../assets/img/Star_2.png'
import FlipCard from '../flipCard/FlipCard';
import '../../styles/Styles.css';

function NameCont({cards}) {
    const userName = window.localStorage.getItem('auth_name');
    let arrName=userName.toUpperCase().split("");
    console.log(arrName);
    let nameCards = cards.filter(character => arrName.includes(character.letter));
    console.log(cards);
    console.log(nameCards);
  

  return (
    <div className='bg-vowels-container d-flex'>

      <div className='text-vowels'>
        <img src={start_2} alt="Estrella de color amarillo" />
        <p className="display-1">HOLA</p>
      </div>
      <div className='d-flex flex-wrap justify-content-center align-items-center text-center' 
      >
        {
          nameCards.map((char) => (
          <FlipCard key= {char.id} {...char} backVideo={char.video} /> 
        ))};

      </div>
    </div>

  )
}

export default NameCont