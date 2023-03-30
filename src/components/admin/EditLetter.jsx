import React, { useEffect, useState } from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getAxiosInstance } from '../../services/functions';
import swal from "sweetalert"; 


function EditLetter() {
    const instance = getAxiosInstance();
    const navigate = useNavigate();
    const [letter, setLetter] = useState('');
    const [type, setType] = useState('');
    const [sound, setSound] = useState('');
    const [image, setImage] = useState('');
    const [video, setVideo] = useState('');
    const {id} = useParams();
    console.log(id);

    useEffect( () =>{
       const getLetterById = async () =>{
         const response = await instance.get(`/api/letter/${id}`);
           setLetter(response.data.theletter.letter);
           setType(response.data.theletter.type);
           setSound(response.data.theletter.sound);
           setImage(response.data.theletter.image);
           setVideo(response.data.theletter.video);

                    console.log(response.data.theletter);
          }
  
          getLetterById();
      }, [] );



    const updateLetter = async (e) => {
        e.preventDefault()
   
        await instance.put(`api/letter/${id}`, {
          letter: letter,
          type: type,
          sound: sound,
          image: image,
          video: video
        })
          swal("Success","La letra se ha actualizado exitosamente.","success");
          navigate('/admin/letters'); 
    }
 
  return (
    <div>
      <h1 className='text-center mt-5 mb-4'>Editar Letra</h1>
 <Form  id="letterForm"  onSubmit={updateLetter}>
              <Form.Group className="mb-3">
                <Form.Label>Letra</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Letra"
                  onChange={(e) => setLetter(e.target.value)}
                  value={letter}
                  name="letter"
                />
              </Form.Group>
              <span></span>
              <Form.Group className="mb-3">
              <Form.Label>Tipo</Form.Label>
                <Form.Select 
                onChange={(e) => setType(e.target.value)}
                value={type}
                name="type"
                >
                    <option value="vowel">vowel</option>
                    <option value="consonant" >consonant</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Audio</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Url del audio"
                  onChange={(e) => setSound(e.target.value)}
                  value={sound}
                  name="sound"
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
                <Form.Label>Video</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Url del video"
                  onChange={(e) => setVideo(e.target.value)}
                  value={video}
                  name="video"
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
                  to="/admin/letters"
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

export default EditLetter