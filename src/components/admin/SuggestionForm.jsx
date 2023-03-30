import React from 'react'
import { useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { getAxiosInstance } from '../../services/functions';
import swal from "sweetalert";

const initialData = {
    title: '',
    image: '',
    url: '',
    description: '',
    error_list: [],
}

function SuggestionForm() {
    const instance = getAxiosInstance();
    const [suggestionInput, setSuggestionInput] = useState({...initialData})

    const handleInput = (e) => {
        e.persist();
        setSuggestionInput({...suggestionInput, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            title: suggestionInput.title,
            url: suggestionInput.url,
            image: suggestionInput.image,
            description: suggestionInput.description,
          };

       
            instance.post("/api/suggestion", data).then((res) => {
              if (res.data.status === 200) {      
                swal("Success", res.data.message, "success");
                setSuggestionInput({...initialData})
             
              } else if(res.data.status === 400) {
                setSuggestionInput({
                  ...suggestionInput,
                  error_list: res.data.validation_errors,
                });
              }
            });

    }

  return (
    <div>
                 <Form onSubmit={handleSubmit} id="letterForm" >
              <Form.Group className="mb-3">
                <Form.Label>Título</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Título"
                  onChange={handleInput}
                  value={suggestionInput.title}
                  name="title"
                />
              </Form.Group>
              <span>{suggestionInput.error_list.title}</span>
              <Form.Group className="mb-3" >
                <Form.Label>Url</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Url recomendado"
                  onChange={handleInput}
                  value={suggestionInput.url}
                  name="url"
                />
                <span>{suggestionInput.error_list.url}</span>
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>Imagen</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Url de la imagen"
                  onChange={handleInput}
                  value={suggestionInput.image}
                  name="image"
                />
                <span>{suggestionInput.error_list.image}</span>
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>Descripción</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Descripción"
                  onChange={handleInput}
                  value={suggestionInput.description}
                  name="description"
                />
                <span>{suggestionInput.error_list.description}</span>
              </Form.Group>

              <div className="d-grid col-6 mx-auto">
                <Button
                  variant="primary"
                  type="submit"
                  className="btn btn-dark btn-block"
                >
                  Añadir Recomendado
                </Button>
              </div>
            </Form>
    </div>
  )
}

export default SuggestionForm