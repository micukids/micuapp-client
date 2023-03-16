import React from "react";
import MainButton from "../mainButton/MainButton";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Memory.css";
import LogoMarta from "../../assets/img/Logo_Marta.png";
import start_2 from "../../assets/img/Star_2.png";
import { Link } from "react-router-dom";


const Memory = () => {
  let memoryAccess = '';
  if (localStorage.getItem('auth_token')){
    memoryAccess = (<Link to={"/memorycard"} >
    <MainButton class="bt" text="¡Vamos a jugar memory!" />
    </Link>)
  }else{
    memoryAccess = 
    (<Link to={"/login"} >
    <MainButton class="bt" text="¡Vamos a jugar memory!" />
    </Link>)
  }

  return (
    <div className="bg-memory">
      <div className="text-memory">
        <img src={start_2} alt="Estrella de color amarillo" />
        <p>MEMORY <span>CARDS</span></p>
      </div>
      <div className="text-memory">
        <p>con la voz de</p>
        </div>
        <img src={LogoMarta} alt="Marta Gómez" />
        {memoryAccess}
    </div>
  );
};

export default Memory;
