import React from "react";
import MainButton from "../mainButton/MainButton";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Memory.css";
import LogoMarta from "../../assets/img/Logo_Marta.png";
import start_2 from "../../assets/img/Star_2.png";

const Memory = () => {
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
      <MainButton class="bt" text="¡Vamos a jugar memory!" />
    </div>
  );
};

export default Memory;
