import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GetLetters } from '../../services/functions';


function Letters() {
    const [letters, setLetters] = useState([]);


    const getAllLetters = async() =>{
      const allLetters = await GetLetters();
      setLetters(allLetters);
    }
  
    useEffect( () => {
        getAllLetters()
    }, [])
  return (
    <div className='container-fluid px-4'>
        <h1 className='mt-4'>Letras del Abecedario</h1>

        <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Letras</button>
        </li>
        <li className="nav-item" role="presentation">
            <button className="nav-link" id="letras-tab" data-bs-toggle="tab" data-bs-target="#letras-tab-pane" type="button" role="tab" aria-controls="letras-tab-pane" aria-selected="false">Añadir Letras</button>
        </li>

        </ul>
        <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
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
                                    <Link to="" className='btn btn-warning'>Editar</Link>
                                    <button className='btn btn-danger'>Eliminar</button>
                                </td>
                            </tr>
                    )) }
                    </tbody>
                </table>
            </div>
            <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">

            </div>
    </div>
    </div>

  )
}

export default Letters