import React, { useEffect, useState } from 'react'
import { getAxiosInstance, GetSuggestions } from '../../services/functions';
import Swal from 'sweetalert2'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link } from 'react-router-dom'
import SuggestionForm from './SuggestionForm';

function Suggestions() {
  const instance = getAxiosInstance();
  const [suggestions, setSuggestions] = useState([]);
  const getAllSuggestion = async() =>{
    const allSuggestion = await GetSuggestions();
    setSuggestions(allSuggestion);
  }

  useEffect( () => {
      getAllSuggestion()
  }, [])
  
  function onDeleteSuggestion(id){
    Swal.fire({
        title: 'Quieres eliminar este recomendado?',
        text: "Si, has clicado por error, puedes cancelar!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, elimina!',
        cancelButtonText: 'Cancelar!'
      }).then(async(result) => {
        if (result.isConfirmed) {
          await instance.delete(`/api/suggestion/${id}`)
          await  getAllSuggestion();
          Swal.fire(
            'Eliminada!',
            'El recomendado ha sido eliminado exitosamente.',
            'success'
          )
        }
      })
    }

  return (
    <div className='container-fluid px-4'>
    <h1 className='mt-4'>Área de Recomendados</h1>

    <Tabs
  defaultActiveKey="vista"
  id="uncontrolled-tab-example"
  className="mb-3"
>
  <Tab eventKey="vista" title="Vista">
  <table className='table table-striped'>
                <thead className='dash-table'>
                    <tr>
                        <th>Título</th>
                        <th>Url</th>
                        <th>Imagen</th>
                        <th>Descripción</th>
                    </tr>
                </thead>
                <tbody>
                { suggestions.map( (suggestion) => (
                        <tr key={suggestion.id} >
                            <td> {suggestion.title} </td>    
                            <td>{suggestion.url}</td>    
                            <td> <img src={suggestion.image} alt={`Imagen de ${suggestion.title}`} width="170" height="170" /> </td>    
                            <td>{suggestion.description}</td>    
                            <td className='buttons-table'>
                                <Link to={`/admin/edit-suggestion/${suggestion.id}`} className='btn btn-warning'>Editar</Link>
                                <button onClick={()=>onDeleteSuggestion(suggestion.id)} className='btn btn-danger'>Eliminar</button>
                            </td>
                        </tr>
                )) }
                </tbody>
            </table>
  </Tab>
  <Tab eventKey="añadir" title="Añadir Recomendado">
    <SuggestionForm/>
  </Tab>
</Tabs>
</div>

  )
}

export default Suggestions