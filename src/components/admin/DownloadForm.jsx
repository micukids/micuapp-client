import React from 'react'
import { useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { getAxiosInstance } from '../../services/functions';
import swal from "sweetalert";


const initialData = {
    thumb: '',
    url: '',
    description: '',
    error_list: [],
}

function DownloadForm() {
    const instance = getAxiosInstance();
    const [downloadInput, setDownloadInput] = useState({...initialData})

    const handleInput = (e) => {
        e.persist();
        setDownloadInput({...downloadInput, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            thumb: downloadInput.thumb,
            url: downloadInput.url,
            description: downloadInput.description,
          };

       
            instance.post("/api/download", data).then((res) => {
              if (res.data.status === 200) {      
                swal("Genial", res.data.message, "success");
                setDownloadInput({...initialData})
             
              } else if(res.data.status === 400) {
                setDownloadInput({
                  ...downloadInput,
                  error_list: res.data.validation_errors,
                });
              }
            });

    }
  return (
    <div>
        <h1 className='text-center mt-5 mb-4'>Formulario para Añadir Nuevo Descargable</h1>
            <Form onSubmit={handleSubmit} id="letterForm" >
              <Form.Group className="mb-3">
                <Form.Label>Miniatura</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Url de la Miniatura"
                  onChange={handleInput}
                  value={downloadInput.thumb}
                  name="thumb"
                />
              </Form.Group>
              <span>{downloadInput.error_list.title}</span>
              <Form.Group className="mb-3" >
                <Form.Label>Url</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Url recomendado"
                  onChange={handleInput}
                  value={downloadInput.url}
                  name="url"
                />
                <span>{downloadInput.error_list.url}</span>
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>Descripción</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Descripción"
                  onChange={handleInput}
                  value={downloadInput.description}
                  name="description"
                />
                <span>{downloadInput.error_list.description}</span>
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

export default DownloadForm