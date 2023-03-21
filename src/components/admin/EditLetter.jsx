/* import React, { useEffect, useState } from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useParams } from 'react-router-dom';
import { getAxiosInstance } from '../../services/functions';
import swal from "sweetalert"; */


function EditLetter() {
   /*  const instance = getAxiosInstance();
    const [editLetterInput, setEditLetterInput] = useState([])
    const {id} = useParams();

    useEffect( () =>{
       
        instance.get(`/api/edit-letter/${id}`).then(res =>{
            if(res.data.status === 200){
                    setEditLetterInput(res.data.theletter)
                }
            })

      }, [] );

    const handleInput = (e) => {
        e.persist();
        setEditLetterInput({...editLetterInput, [e.target.name]:e.target.value})
    }

    const updateLetter = async (e) => {
        e.preventDefault()

        const data = editLetterInput;
   
        await instance.put(`api/letter/${id}`, data)
          swal("Success","Your quote has been updated","success"); 
    }
 */
  return (
    <div>
 {/* <Form  id="letterForm"  onSubmit={updateLetter}>
              <Form.Group className="mb-3">
                <Form.Label>Letra</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Letra"
                  onChange={handleInput}
                  value={editLetterInput.letter}
                  name="letter"
                />
              </Form.Group>
              <span>{editLetterInput.error_list.letter}</span>
              <Form.Group className="mb-3">
              <Form.Label>Tipo</Form.Label>
                <Form.Select 
                onChange={handleInput}
                value={editLetterInput.type}
                name="type"
                >
                    <option value="vowel">vowel</option>
                    <option value="" >consonant</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Audio</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Url del audio"
                  onChange={handleInput}
                  value={editLetterInput.sound}
                  name="sound"
                />
                <span>{editLetterInput.error_list.sound}</span>
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>Imagen</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Url de la imagen"
                  onChange={handleInput}
                  value={editLetterInput.image}
                  name="image"
                />
                <span>{editLetterInput.error_list.image}</span>
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>Video</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Url del video"
                  onChange={handleInput}
                  value={editLetterInput.video}
                  name="video"
                />
                <span>{editLetterInput.error_list.video}</span>
              </Form.Group>

              <div className="d-grid col-6 mx-auto gap-1">
                <Button
                  variant="primary"
                  type="submit"
                  className="btn btn-dark btn-block"
                >
                  Actualizar
                </Button>
                <Button
                  variant="primary"
                  type="button"
                  className="btn btn-secondary btn-block"
                >
                  Cancelar
                </Button>
              </div>
            </Form> */}
    </div>
  )
}

export default EditLetter