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
          <h2 className="description">
            Esta web fue desarrollada como proyecto final del Bootcamp de
            Desarrollo Web Full-Stack de Factoria F5 - Patrocinado por
            Google.org{" "}
          </h2>
          <div className="icon-container d-flex">
            <img className="icon" src={f5} alt="Logo Factoría F5" />
            <img className="icon" src={google} alt="Logo google" />
          </div>
        </div>
        <div className="credits-sections">
          <h6>DESARROLLADORAS</h6>
          <h2>Elvia Benedith</h2>
          <h2>Gabriela Barajas</h2>
          <h2>Liliana Dalmarco</h2>
          <h2>Karolina Villarraga</h2>
          <h2>Isabel Gutiérrez</h2>
        </div>
        <div className="credits-sections">
          <h6>DISEÑO UX/UI</h6>
          <h2>Karolina Villarraga</h2>
        </div>
        <div className="credits-sections">
          <h6>VOZ</h6>
          <h2>Marta Gómez</h2>
        </div>
        <div className="credits-sections">
          <h6>FORMADORAS</h6>
          <h2>Alexandra Galarza</h2>
          <h2>Laura Rodríguez</h2>
        </div>
        <div className="credits-sections">
          <h6>RESPONSABLE DE PROMOCIÓN</h6>
          <h2>Lola Martínez Cueto</h2>
        </div>
        <div className="credits-sections">
          <h6>STAKEHOLDER</h6>
          <h2>Sandra Merino</h2>
        </div>
        <div className="credits-sections">
          <h6>SCRUM MASTER</h6>
          <h2>Liliana Dalmarco</h2>
        </div>
        <div className="credits-sections">
          <h6>PRODUCT OWNER</h6>
          <h2>Karolina Villarraga</h2>
        </div>
        <div className="credits-sections">
          <h6>CANCIÓN Y VÍDEO ANIMADO A, B, C, CH, D</h6>
          <h2>Letra y música: Marta Gómez (SGAE)</h2>
          <h2>Marimba y percusión vocal: Marta Gómez</h2>
          <h2>Voces invitadas: Mila y Nadine Daccach</h2>
          <h2>Mezcla: Pablo Giménez - Panambí Productions</h2>
          <h2>Animación: Carlos Azcuaga</h2>
          <h2>Diseño: Karolina Villarraga</h2>
          <h2>Management: Julio Serna</h2>
        </div>
      </div>
    </div>
  );
};

export default CreditsComponent;
