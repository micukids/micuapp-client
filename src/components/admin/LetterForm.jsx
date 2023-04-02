import React, { useState } from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { getAxiosInstance} from '../../services/functions';
import swal from "sweetalert";
import { useNavigate } from 'react-router-dom';

const initialData = {
    letter: '',
    type: '',
    sound: '',
    image: '',
    video: '',
    error_list: [],
}

function LetterForm() {
  const navigate = useNavigate();
    const instance = getAxiosInstance();
    const [letterinput, setLetterInput] = useState({...initialData})


    const handleInput = (e) => {
        e.persist();
        setLetterInput({...letterinput, [e.target.name]:e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            letter: letterinput.letter,
            type: letterinput.type,
            sound: letterinput.sound,
            image: letterinput.image,
            video: letterinput.video,
          };

       
            instance.post("/api/letter", data).then((res) => {
              if (res.data.status === 200) {      
                swal("Genial", res.data.message, "success");
                setLetterInput({...initialData})
                navigate('/admin/letters')
             
              } else if(res.data.status === 400) {
                setLetterInput({
                  ...letterinput,
                  error_list: res.data.validation_errors,
                });
              }
            });
      
    }

  return (
    <div>
         <Form onSubmit={handleSubmit} id="letterForm" >
              <Form.Group className="mb-3">
                <Form.Label>Letra</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Letra"
                  onChange={handleInput}
                  value={letterinput.letter}
                  name="letter"
                />
              </Form.Group>
              <span>{letterinput.error_list.letter}</span>
              <Form.Group className="mb-3">
              <Form.Label>Tipo</Form.Label>
                <Form.Select 
                onChange={handleInput}
                value={letterinput.type}
                name="type"
                >
                    <option value="vowel">vowel</option>
                    <option value="consonant" >consonant</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>Audio</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Url del audio"
                  onChange={handleInput}
                  value={letterinput.sound}
                  name="sound"
                />
                <span>{letterinput.error_list.sound}</span>
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>Imagen</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Url de la imagen"
                  onChange={handleInput}
                  value={letterinput.image}
                  name="image"
                />
                <span>{letterinput.error_list.image}</span>
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>Video</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Url del video"
                  onChange={handleInput}
                  value={letterinput.video}
                  name="video"
                />
                <span>{letterinput.error_list.video}</span>
              </Form.Group>

              <div className="d-grid col-6 mx-auto">
                <Button
                  variant="primary"
                  type="submit"
                  className="btn btn-dark btn-block"
                >
                  Añadir Letra
                </Button>
              </div>
            </Form>
    </div>
  )
}

export default LetterForm