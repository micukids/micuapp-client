import React from "react";
import Layout from "../../components/layout/Layout";
import MainImage from "../../components/mainImage/MainImage";
import Img_Marta from "../../assets/img/Img_MartaGomez.png";
import Img_aprende from "../../assets/img/Img_aprender.png";
import Img_flash from "../../assets/img/Img_Flashcards.png";
import Img_video from "../../assets/img/Img_Videoclip.png";
import MainTitle from "../../components/mainTitle/MainTitle";

function ParentsPage() {
  return (
    <div className="bg-parents">
      <Layout>
        <div>
          <section className="section-container">
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

          <section className="section-container-right">
            <div>
              <MainImage src={Img_flash} alt={"Nena jugando con flash cards"} />
            </div>
            <div className="card-parents">
              <MainTitle text="FLASH " text2="CARDS" />
              <h2>
              La experiencia se completa con las tarjetas físicas. Un set de 30 flash cards ilustradas y borrables, en castellano e inglés con las que los más pequeños pueden aprender lenguaje, cantando y trazando las letras. Los niños pueden ordenar y desordenar las tarjetas, dibujarse a ellos mismos, trazar y borrar con el marcador incluido en el set.
              Puedes adquirir el set de tarjetas aquí 
              </h2>
            </div>
          </section>

          <section className="section-container">
            <div className="card-parents">
              <MainTitle text="MARTA " text2="GÓMEZ" />
              <h2>
              Cantautora colombiana ganadora del Grammy Latino en la categoría "Mejor disco infantil del año" (2014). Una hermosa  canción suya inspirada en los personajes de las tarjetas acompaña esta experiencia educativa mientras la música estimula el aprendizaje y fortalece la memoria de los peques.Su voz también nos acompaña en cada uno de los juegos interactivos para apender las letras.  
              </h2>
            </div>
            <div>
              <MainImage
                src={Img_Marta}
                alt={"Marta Gómez"}
              />
            </div>
          </section>

          <section className="section-container-right">
            <div>
              <MainImage src={Img_video} alt={"Personaje dinosaurio del videoclip"} />
            </div>
            <div className="card-parents">
              <MainTitle text="VIDEOCLIP " text2="ANIMADO" />
              <h2>
              Marta Gómez, en colaboración con Micukids creó “A, B, C, CH, D” una canción inspirada en los personajes que enseñan las letras del alfabeto a los más pequeños. Los niños y niñas experimentan tarareando la canción y descubriendo cada palabra en el video-clip animado. Puedes ver el vídeoclip completo aquí. 
              </h2>
            </div>
          </section>
        </div>
      </Layout>
    </div>
  );
}

export default ParentsPage;
