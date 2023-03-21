import React from 'react'
import Layout from '../../components/layout/Layout'
import star_2 from '../../assets/img/Star_2.png'
import MainImage from '../../components/mainImage/MainImage'
import Img_Marta from '../../assets/img/Img_MartaGomez.png'
import Img_aprende from '../../assets/img/Img_aprender.png'
import Img_flash from '../../assets/img/Img_Flashcards.png'
import Img_video from '../../assets/img/Img_Videoclip.png'


function ParentsPage() {
  return (
    <div className='bg-parents'>
        <Layout>
            <div>
                <section>
                    <div>
                        <div className='text-vowels'>
                        <img src={star_2} alt="Estrella de color amarillo" />
                        <p>APRENDER <span>JUGANDO</span></p>
                        {/* <h2>Micu creo una forma divertida de aprender el abecedario. Los peques de 2 a 6 años podrán jugar mientras escuchan los sonidos de las letras, cantan y conocen palabras de ejemplo. Un aprendizaje lúdico adecuado a su edad que les ayudará a adquirir la práctica que necesitan para saber leer y escribir.</h2> */}
                        </div>
                    </div>
                    <MainImage src={Img_aprende} alt={"Nena aprendiendo con la tablet"}/>
                </section>
                <section>
                    <div className='text-vowels'>
                    <img src={star_2} alt="Estrella de color amarillo" />
                    <p>FLASH <span>CARDS</span></p>
                    </div>
                    <MainImage src={Img_flash} alt={"Marta Gómez"}/>
                </section>
                <section>
                    <div className='text-vowels'>
                    <img src={star_2} alt="Estrella de color amarillo" />
                    <p>MARTA <span>GÓMEZ</span></p>
                    </div>
                    <MainImage src={Img_Marta} alt={"Marta Gómez"}/>
                </section>
                <section>
                    <div className='text-vowels'>
                    <img src={star_2} alt="Estrella de color amarillo" />
                    <p>VIDEOCLIP <span>ANIMADO</span></p>
                    </div>
                    <MainImage src={Img_video} alt={"Marta Gómez"}/>
                </section>
            </div>
        </Layout>
    </div>
  )
}

export default ParentsPage