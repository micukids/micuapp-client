import React from 'react'
import MainButton from '../mainButton/MainButton'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Memory.css"

const Memory = () => {
  return (
    <div className="Memory">
    <h1>Memory cards</h1>
    <MainButton class='bt' text='¡Vamos a jugar memory!'/>
    </div>
  );
}

export default Memory
