import React, { useState } from 'react'
import { useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link } from 'react-router-dom';
import { getAxiosInstance, GetDownloads } from '../../services/functions';
import Swal from 'sweetalert2'
import DownloadForm from './DownloadForm';

function Downloads() {
  const instance = getAxiosInstance();
  const [downloads, setDownloads] = useState([]);

  const getAllDownloads = async() =>{
    const allDownloads = await GetDownloads();
    setDownloads(allDownloads);
  }

  useEffect( () => {
      getAllDownloads()
    }, [])

    function onDeleteDownload(id){
      Swal.fire({
          title: 'Quieres eliminar este descargable?',
          text: "Si, has clicado por error, puedes cancelar!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3D116B',
          cancelButtonColor: '#FF730E',
          confirmButtonText: 'Sí, elimina!',
          cancelButtonText: 'Cancelar!'
        }).then(async(result) => {
          if (result.isConfirmed) {
            await instance.delete(`/api/download/${id}`)
            await  getAllDownloads();
            Swal.fire(
              'Eliminada!',
              'El descargable ha sido eliminado exitosamente.',
              'success'
            )
          }
        })
      }

  return (
    <div className='container-fluid px-4'>
    <h1 className='mt-4'>Área de Descargables</h1>

    <Tabs
  defaultActiveKey="vista"
  id="uncontrolled-tab-example"
  className="mb-3"
>
  <Tab eventKey="vista" title="Vista">
  <table className='table table-striped'>
                <thead className='dash-table'>
                    <tr>
                        <th>Miniatura</th>
                        <th>Url</th>
                        <th>Descripcion</th>
                    </tr>
                </thead>
                <tbody>
                { downloads.map( (download, index) => (
                        <tr key={index} >
                            <td> <img src={download.thumb} alt={`Imagen `} width="170" height="170" /> </td>    
                            <td>{download.url}</td>    
                            <td>{download.description}</td>    
                            <td className='d-flex buttons-table gap-1'>
                                <Link to={`/admin/download/${download.id}`} className='btn btn-warning'>Editar</Link>
                                <button onClick={()=>onDeleteDownload(download.id)} className='btn btn-danger'>Eliminar</button>
                            </td>
                        </tr>
                )) }
                </tbody>
            </table>
  </Tab>
  <Tab eventKey="añadir" title="Añadir Descargable">
    <DownloadForm/>
  </Tab>
</Tabs>
</div>

  )
}

export default Downloads