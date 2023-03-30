import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getAxiosInstance } from '../../services/functions';
import swal from "sweetalert"; 

function EditSuggestion() {
    const instance = getAxiosInstance();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const {id} = useParams();
    console.log(id);

    useEffect( () =>{
       const getSuggestionById = async () =>{
         const response = await instance.get(`/api/suggestion/${id}`);
            setTitle(response.data.suggestion.title);
            setUrl(response.data.suggestion.url);
            setImage(response.data.suggestion.image);
            setDescription(response.data.suggestion.description);
          }
  
          getSuggestionById();
      }, [] );



    const updateSuggestion = async (e) => {
        e.preventDefault()
   
        await instance.put(`api/suggestion/${id}`, {
          title: title,
          url: url,
          image: image,
          description: description
        })
          swal("Success","Tu Reomendado se ha actualizado exitosamente.","success");
          navigate('/admin/suggestions'); 
    }
  return (
    <div>
        <h1 className='text-center mt-5 mb-4'>Editar Recomendado</h1>
         <Form onSubmit={updateSuggestion} id="letterForm" >
              <Form.Group className="mb-3">
                <Form.Label>Título</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Título"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  name="title"
                />
              </Form.Group>
              <span></span>
              <Form.Group className="mb-3" >
                <Form.Label>Url</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Url recomendado"
                  onChange={(e) => setUrl(e.target.value)}
                  value={url}
                  name="url"
                />
                <span></span>
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>Imagen</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Url de la imagen"
                  onChange={(e) => setImage(e.target.value)}
                  value={image}
                  name="image"
                />
                <span></span>
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>Descripción</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Descripción"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  name="description"
                />
                <span></span>
              </Form.Group>

              <div className="d-grid col-6 mx-auto gap-1">
                <Button
                  variant="primary"
                  type="submit"
                  className="btn btn-dark btn-block"
                >
                  Actualizar
                </Button>
                <Link
                  to="/admin/suggestions"
                  variant="primary"
                  type="button"
                  className="btn btn-secondary btn-block"
                >
                  Cancelar
                </Link>
              </div>
            </Form>
    </div>
  )
}

export default EditSuggestion