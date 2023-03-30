import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getAxiosInstance } from '../../services/functions';
import swal from "sweetalert"; 

function EditDownload() {
  const instance = getAxiosInstance();
  const navigate = useNavigate();
  const [thumb, setThumb] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const {id} = useParams();

  useEffect( () =>{
     const getDownloadById = async () =>{
       const response = await instance.get(`/api/download/${id}`);
          setThumb(response.data.download.thumb);
          setUrl(response.data.download.url);
          setDescription(response.data.download.description);
        }

        getDownloadById();
    }, [] );



  const updateDownload = async (e) => {
      e.preventDefault()
 
      await instance.put(`api/download/${id}`, {
        thumb: thumb,
        url: url,
        description: description
      })
        swal("Success","El descargable se ha actualizado exitosamente.","success");
        navigate('/admin/downloads'); 
  }
  return (
    <div>
         <h1 className='text-center mt-5 mb-4'>Editar Descargable</h1>
         <Form onSubmit={updateDownload} id="letterForm" >
              <Form.Group className="mb-3">
                <Form.Label>Miniatura</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Url de la miniatura"
                  onChange={(e) => setThumb(e.target.value)}
                  value={thumb}
                  name="thumb"
                />
              </Form.Group>
              <span></span>
              <Form.Group className="mb-3" >
                <Form.Label>Url</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Url descargable"
                  onChange={(e) => setUrl(e.target.value)}
                  value={url}
                  name="url"
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
                  to="/admin/downloads"
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

export default EditDownload