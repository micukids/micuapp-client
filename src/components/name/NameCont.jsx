import '../../styles/Styles.css';
import NameCard from './NameCard';

function NameCont(props) {
    const userName = window.localStorage.getItem('auth_name');
    let arrName=userName.toUpperCase().split("");

  return (
    <div className='d-flex cont-name'>

      <div className='text-vowels'>
        <p className={`display-1 ${props.className}`}>HOLA</p>
      </div>

      <div className='d-flex flex-wrap justify-content-center align-items-center text-center' >
        {
          arrName.map((char, index) => (
            <NameCard letter={char} key = {index} />
        ))}
      </div>

    </div>

  )
}

export default NameCont