import React from 'react';
import '../../styles/Styles.css';


const MainButton = (props) => {
  return ( 
    <>
        <button className={`bt border-0 ${props.className}`} onClick={props.onClick} data={props.data}>{props.text}</button>
    </>
  )
}

export default MainButton

MainButton.defaultProps = {
    text: 'Mi botón',
  }