import React, { useState } from 'react';
import '../../styles/Styles.css';
import star_2 from '../../assets/img/Star_2.png';
import iconFacebook from '../../assets/img/icon-circle-facebook-.svg';
import iconYoutube from '../../assets/img/icon-you.svg';
import iconInsta from '../../assets/img/insta.svg';
import { getAxiosInstance } from '../../services/functions';
import swal from "sweetalert";

const initialData = {
  name: '',
  email: '',
  subject: '',
  message: '',
  error_list: [],
}

function ContactForm() {
  const instance = getAxiosInstance();
  const [contactInput, setContactInput] = useState({...initialData})

  function handleChange(event){
    event.persist();
    setContactInput({...contactInput, [event.target.name]:event.target.value})
  }

  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      name: contactInput.name,
      email: contactInput.email,
      subject: contactInput.subject,
      message: contactInput.message,
    };

    instance.get("/sanctum/csrf-cookie").then((response) => {
      instance.post("/api/contact", data).then((res) => {
        if (res.data.status === 200) {      
          swal("Success", res.data.message, "success");
          setContactInput({...initialData})
       
        } else if(res.data.status === 400) {
          setContactInput({
            ...contactInput,
            error_list: res.data.validation_errors,
          });
        }
      });
    });
  }

  return (
    <div className="row form-container">
      <div className="form-container-title d-flex justify-content-center align-items-center">
        <img className="star-icon" src={star_2} alt="Estrella de color amarillo"/>
        <p className="form-title">CONTÁCTANOS</p>
      </div>
      <div className="col-md-6">
        <form className="form-container-left" onSubmit={handleSubmit}>
          <label htmlFor="name"></label>
          <input className="contact-input" type="text" id="name" name="name" onChange={handleChange} value={contactInput.name} placeholder="¿Cual es tu nombre?" /> 
          <span>{contactInput.error_list.name}</span>

          <label htmlFor="email"></label>
          <input className="contact-input" type="email" id="email" name="email" onChange={handleChange} value={contactInput.email} placeholder="¿Cuál es tu correo electrónico?" />
          <span>{contactInput.error_list.email}</span>

          <label htmlFor="subject"></label>
          <input className="contact-input" type="text" id="subject" name="subject" onChange={handleChange} value={contactInput.subject} placeholder="¿Por qué tema nos contactas?" />
          <span>{contactInput.error_list.subject}</span>

          <label htmlFor="message"></label>
          <textarea id="message" name="message" onChange={handleChange} value={contactInput.message}></textarea>
          <span>{contactInput.error_list.message}</span>
          <input className="contact-input" type="submit" value="Enviar"></input>
        </form>
      </div>
      <div className="col-md-5 form-container-right">
        <h2>
          Si necesitas contactarnos para resolver cualquier duda o simplemente dejarnos un comentario, por favor siéntete libre de hacerlo.
        </h2>
        <h2 className="mail-text">
          Nuestro correo electrónico es: 
          <span className="fw-bold"> hola@micukids.com</span> 
        </h2>
        <h2 className="social-text">
          Síguenos en nuestras redes sociales:
        </h2>
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

