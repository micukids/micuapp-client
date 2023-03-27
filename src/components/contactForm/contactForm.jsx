import React from 'react';
import '../../styles/Styles.css';
import star_2 from '../../assets/img/Star_2.png';
import iconFacebook from '../../assets/img/icon-circle-facebook-.svg';
import iconYoutube from '../../assets/img/icon-you.svg';
import iconInsta from '../../assets/img/insta.svg';

function ContactForm() {
  function handleSubmit(event) {
    event.preventDefault();
    // lógica para enviar el formulario
  }

  return (
    <div className="row form-container">
      <div className="form-container-title d-flex justify-content-center align-items-center">
        <img className="star-icon" src={star_2} alt="Estrella de color amarillo"/>
        <p className="form-title">CONTÁCTANOS</p>
      </div>
      <div className="col-sm-12 col-md-6">
        <form className="form-container-left" onSubmit={handleSubmit}>
          <label htmlFor="name"></label>
          <input type="text" id="name" name="name" placeholder="¿Cual es tu nombre?" required />

          <label htmlFor="email"></label>
          <input type="email" id="email" name="email" placeholder="¿Cuál es tu correo electrónico?" required />

          <label htmlFor="subject"></label>
          <input type="text" id="subject" name="subject" placeholder="¿Por qué tema nos contactas?" required />

          <label htmlFor="message"></label>
          <textarea id="message" name="message" required></textarea>
          <input type="submit" value="Enviar"></input>
        </form>
      </div>
      <div className="col-sm-12 col-md-6 form-container-right">
        <p>
          Si necesitas contactarnos para resolver cualquier duda o simplemente dejarnos un comentario, por favor siéntete libre de hacerlo.
        </p>
        <p className="mail-text">
          Nuestro correo electrónico es: 
          <span className="fw-bold"> hola@micukids.com</span> 
        </p>
        <p className="social-text">
          Síguenos en nuestras redes sociales:
        </p>
        <div className="social-icons d-flex justify-content-center">
          <img className="icon-social" src={iconInsta} alt="Icono instagram" />
          <img className="icon-social" src={iconYoutube} alt="Icono Youtube" />
          <img className="icon-social" src={iconFacebook} alt="Icono facebook" />
        </div>
      </div>
    </div>
  );
}

export default ContactForm;

