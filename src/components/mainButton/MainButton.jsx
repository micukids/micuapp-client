import React from 'react';
import '../../styles/Styles.css';


const MainButton = (props) => {
  return (
    <>
        <button className={`bt ${props.class}`} >{props.text}</button>
    </>
  )
}

export default MainButton

MainButton.defaultProps = {
    text: 'Mi botón',
  }