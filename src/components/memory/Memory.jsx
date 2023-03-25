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
    memoryAccess = (
      <div className="main-container">
        <div className="container-titles-bt">
          <div className="text-memory">
            <img src={start_2} alt="Estrella de color amarillo" />
            <p>MEMORY <span>CARDS</span></p>
          </div>
            <Link to={"/memorycard"} >
            <MainButton class="bt" text="¡Vamos a jugar memory!" />
            </Link>
        </div>
        <div className="container-titles-bt">
          <div className="text-memory">
            <img src={start_2} alt="Estrella de color amarillo" />
            <p>SOUND <span>CARDS</span></p>
          </div>
        <Link to={"/soundcard"} >
        <MainButton class="bt" text="¡Escucha el sonido de cada letra!"/>
        </Link>
        </div>
      </div>
    )
  }else{
    memoryAccess = 
    (
      <div className="main-container">
        <div className="container-titles-bt">
          <div className="text-memory">
            <img src={start_2} alt="Estrella de color amarillo" />
            <p>MEMORY <span>CARDS</span></p>
          </div>
            <Link to={"/login"} >
            <MainButton class="bt" text="¡Vamos a jugar memory!" />
            </Link>
        </div>
        <div className="container-titles-bt">
          <div className="text-memory">
            <img src={start_2} alt="Estrella de color amarillo" />
            <p>SOUND <span>CARDS</span></p>
          </div>
        <Link to={"/login"} >
        <MainButton class="bt" text="¡Escucha el sonido de cada letra!"/>
        </Link>
        </div>
      </div>
    )
  }


  return (
    <div className="bg-memory">
      <div className="container-name">
        <p>con la voz de</p>
        <img src={LogoMarta} alt="Marta Gómez"/>
      </div>
      <div>
       {memoryAccess}
      </div>

    </div>

  );
};

export default Memory;

