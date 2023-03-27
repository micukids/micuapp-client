import React, { useEffect } from "react";
import Layout from "../../components/layout/Layout";
import Aos from "aos";
import "aos/dist/aos.css";
import MainImage from "../../components/mainImage/MainImage";
import Img_Marta from "../../assets/img/Img_MartaGomez.png";
import Img_aprende from "../../assets/img/Img_aprender.png";
import Img_flash from "../../assets/img/Img_Flashcards.png";
import Img_video from "../../assets/img/Img_Videoclip.png";
import MainTitle from "../../components/mainTitle/MainTitle";
import Instagram from "../../assets/img/🦆 icon _rounded instagram_.svg"
import Youtube from "../../assets/img/icon_Youtube.svg"
import Facebook from "../../assets/img/🦆 icon _circle facebook_.svg"
import { Link } from "react-router-dom";

const ParentsPage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="bg-parents">
      <Layout>
        <div>
          <section data-aos="fade-up" className="section-container">
            <div className="card-parents">
              <MainTitle text="APRENDER " text2="JUGANDO" />
              <h2>
                Micu creo una forma divertida de aprender el abecedario. Los
                peques de 2 a 6 años podrán jugar mientras escuchan los sonidos
                de las letras, cantan y conocen palabras de ejemplo. Un
                aprendizaje lúdico adecuado a su edad que les ayudará a adquirir
                la práctica que necesitan para saber leer y escribir.
              </h2>
            </div>
            <div>
              <MainImage
                src={Img_aprende}
                alt={"Nena aprendiendo con la tablet"}
              />
            </div>
          </section>

          <section data-aos="fade-up" className="section-container-right">
            <div>
              <MainImage src={Img_flash} alt={"Nena jugando con flash cards"} />
            </div>
            <div className="card-parents">
              <MainTitle text="FLASH " text2="CARDS" />
              <h2>
              La experiencia se completa con las tarjetas físicas. Un set de 30 flash cards ilustradas y borrables, en castellano e inglés con las que los más pequeños pueden aprender lenguaje, cantando y trazando las letras. Los niños pueden ordenar y desordenar las tarjetas, dibujarse a ellos mismos, trazar y borrar con el marcador incluido en el set.
              Puedes adquirir el set de <a href="https://www.micukids.com/" target="_blank" rel="noopener noreferrer">tarjetas aquí. </a>
              </h2>
            </div>
          </section>

          <section data-aos="fade-up" className="section-container">
            <div className="card-parents">
              <MainTitle text="MARTA " text2="GÓMEZ" />
              <h2>
              Cantautora colombiana ganadora del Grammy Latino en la categoría "Mejor disco infantil del año" (2014). Una <a href="https://www.youtube.com/watch?v=CjKX3X-ZKzw" target="_blank" rel="noopener noreferrer">hermosa canción</a> suya inspirada en los personajes de las tarjetas acompaña esta experiencia educativa mientras la música estimula el aprendizaje y fortalece la memoria de los peques.Su voz también nos acompaña en cada uno de los juegos interactivos para apender las letras.  
              </h2>
            </div>
            <div>
              <MainImage
                src={Img_Marta}
                alt={"Marta Gómez"}
              />
            </div>
          </section>

          <section data-aos="fade-up" className="section-container-right">
            <div>
              <MainImage src={Img_video} alt={"Personaje dinosaurio del videoclip"} />
            </div>
            <div className="card-parents">
              <MainTitle text="VIDEOCLIP " text2="ANIMADO" />
              <h2>
              Marta Gómez, en colaboración con Micukids creó “A, B, C, CH, D” una canción inspirada en los personajes que enseñan las letras del alfabeto a los más pequeños. Los niños y niñas experimentan tarareando la canción y descubriendo cada palabra en el videoclip animado. Puedes ver el <a href="https://www.youtube.com/watch?v=CjKX3X-ZKzw" target="_blank" rel="noopener noreferrer">vídeo completo aquí.</a>
              </h2>
            </div>
          </section>
          <div className="follow-container">
            <div className="follow-text">
              <p>SÍGUENOS EN NUESTRAS</p>
              <p><span>REDES SOCIALES</span></p>
            </div>
            <div className="icons-container">
            <Link to="https://www.instagram.com/micukids/" target="_blank"><img src={Instagram} alt="Instagram"/></Link>
            <Link to="https://www.youtube.com/@MicuKids" target="_blank"> <img src={Youtube} alt="Youtube"/></Link>
            <Link to="https://www.facebook.com/micukidsclub/" target="_blank"><img src={Facebook} alt="Facebook"/></Link>           
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default ParentsPage;
