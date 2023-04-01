import React from "react";
import star_2 from "../../assets/img/Star_2.png";
import f5 from "../../assets/img/f5.png";
import google from "../../assets/img/google.png";
import "../../styles/Styles.css";
import MainTitle from "../mainTitle/MainTitle";

const CreditsComponent = () => {
  return (
    <div className="bg-credits">
      <div className="title-container">
        <MainTitle text="CRÉDITOS" text2="" />
      </div>
      <div className="center-container">
        <div className="intro-credits d-flex ">
          <p className="description">
            Esta web fue desarrollada como proyecto final del Bootcamp de
            Desarrollo Web Full-Stack de Factoria F5 - Patrocinado por
            Google.org{" "}
          </p>
          <div className="icon-container d-flex">
            <img className="icon" src={f5} alt="Logo Factoría F5" />
            <img className="icon" src={google} alt="Logo google" />
          </div>
        </div>
        <div className="credits-sections">
          <h6>DESARROLLADORAS</h6>
          <p>Elvia Benedith</p>
          <p>Gabriela Barajas</p>
          <p>Liliana Dalmarco</p>
          <p>Karolina Villarraga</p>
          <p>Isabel Gutiérrez</p>
        </div>
        <div className="credits-sections">
          <h6>DISEÑO UX/UI</h6>
          <p>Karolina Villarraga</p>
        </div>
        <div className="credits-sections">
          <h6>VOZ</h6>
          <p>Marta Gómez</p>
        </div>
        <div className="credits-sections">
          <h6>FORMADORAS</h6>
          <p>Alexandra Galarza</p>
          <p>Laura Rodríguez</p>
        </div>
        <div className="credits-sections">
          <h6>RESPONSABLE DE PROMOCIÓN</h6>
          <p>Lola Martínez Cueto</p>
        </div>
        <div className="credits-sections">
          <h6>STAKEHOLDER</h6>
          <p>Sandra Merino</p>
        </div>
        <div className="credits-sections">
          <h6>SCRUM MASTER</h6>
          <p>Liliana Dalmarco</p>
        </div>
        <div className="credits-sections">
          <h6>PRODUCT OWNER</h6>
          <p>Karolina Villarraga</p>
        </div>
        <div className="credits-sections">
          <h6>CANCIÓN Y VÍDEO ANIMADO A, B, C, CH, D</h6>
          <p>Letra y música: Marta Gómez (SGAE)</p>
          <p>Marimba y percusión vocal: Marta Gómez</p>
          <p>Voces invitadas: Mila y Nadine Daccach</p>
          <p>Mezcla: Pablo Giménez - Panambí Productions</p>
          <p>Animación: Carlos Azcuaga</p>
          <p>Diseño: Karolina Villarraga</p>
          <p>Management: Julio Serna</p>
        </div>
      </div>
    </div>
  );
};

export default CreditsComponent;
