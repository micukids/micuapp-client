import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAxiosInstance, GetLetters } from '../../services/functions';
import Swal from 'sweetalert2'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import LetterForm from './LetterForm';


function Letters() {
    const instance = getAxiosInstance();
    const [letters, setLetters] = useState([]);

    const getAllLetters = async() =>{
      const allLetters = await GetLetters();
      setLetters(allLetters);
    }
  
    useEffect( () => {
        getAllLetters()
    }, [])

    function onDeleteLetter(id){
        Swal.fire({
            title: 'Quieres eliminar esta letra?',
            text: "Si, has clicado por error, puedes cancelar!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, elimina!',
            cancelButtonText: 'Cancelar!'
          }).then(async(result) => {
            if (result.isConfirmed) {
              await instance.delete(`/api/letter/${id}`)
              await  getAllLetters();
              Swal.fire(
                'Eliminada!',
                'La letra ha sido eliminada exitosamente.',
                'success'
              )
            }
          })
        }
    


  return (
    <div className='container-fluid px-4'>
        <h1 className='mt-4'>Letras del Abecedario</h1>

        <Tabs
      defaultActiveKey="vista"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="vista" title="Vista">
      <table className='table table-striped'>
                    <thead className='dash-table'>
                        <tr>
                            <th>Letra</th>
                            <th>Tipo</th>
                            <th>Sonido</th>
                            <th>Imagen</th>
                            <th>Video</th>
                        </tr>
                    </thead>
                    <tbody>
                    { letters.map( (letter) => (
                            <tr key={letter.id} >
                                <td> {letter.letter} </td>    
                                <td>{letter.type}</td>  
                                <td>
                                    <audio controls>
                                        <source src={letter.sound} type="audio/mpeg"/>
                                    </audio>
                                </td>   
                                <td> <img src={letter.image} alt={`Imagen letra ${letter.letter}`} width="170" height="170" /> </td>    
                                <td>
                                    <video width="170" height="170" controls>
                                        <source src={letter.video} type="video/mp4"/>
                                    </video>
                                </td>
                                <td className='buttons-table'>
                                    <Link to={`/admin/letter/${letter.id}`} className='btn btn-warning'>Editar</Link>
                                    <button onClick={()=>onDeleteLetter(letter.id)} className='btn btn-danger'>Eliminar</button>
                                </td>
                            </tr>
                    )) }
                    </tbody>
                </table>
      </Tab>
      <Tab eventKey="añadir" title="Añadir Letra">
        <LetterForm/>
      </Tab>
    </Tabs>
    </div>

  )
}

export default Letters