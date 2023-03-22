import React from 'react';
import '../../styles/Styles.css';


const MainButton = (props) => {
  return (
    <>
        <button className={`bt border-0 ${props.class}`} onClick={props.onClick} >{props.text}</button>
    </>
  )
}

export default MainButton

MainButton.defaultProps = {
    text: 'Mi botón',
  }