import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link } from 'react-router-dom';

function Downloads() {
  return (
    <div className='container-fluid px-4'>
    <h1 className='mt-4'>Descargables</h1>

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
              
                        <tr key='' >
                            <td>  </td>    
                            <td></td>  
                            <td>
                                <audio controls>
                                    <source src='' type="audio/mpeg"/>
                                </audio>
                            </td>   
                            <td> <img src='' alt={`Imagen letra `} width="170" height="170" /> </td>    
                            <td>
                                <video width="170" height="170" controls>
                                    <source src='' type="video/mp4"/>
                                </video>
                            </td>
                            <td className='buttons-table'>
                                <Link to='' className='btn btn-warning'>Editar</Link>
                                <button  className='btn btn-danger'>Eliminar</button>
                            </td>
                        </tr>
           
                </tbody>
            </table>
  </Tab>
  <Tab eventKey="añadir" title="Añadir Letra">
    gdsgfg
  </Tab>
</Tabs>
</div>

  )
}

export default Downloads