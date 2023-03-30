import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { getAxiosInstance, GetMessages } from '../../services/functions';
import Messages from './Messages'
import Swal from 'sweetalert2'


function ContactMessages() {
  const instance = getAxiosInstance();
  const [contactMessages, setContactMessages] = useState([]);

  const getAllMessages = async () => {
    const allMessages = await GetMessages();
    setContactMessages(allMessages);
  }

    useEffect( () => {
      getAllMessages()
  }, [])

  function onDeleteMessage(id){
    Swal.fire({
        title: 'Quieres eliminar este mensaje?',
        text: "Si, has clicado por error, puedes cancelar!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, elimina!',
        cancelButtonText: 'Cancelar!'
      }).then(async(result) => {
        if (result.isConfirmed) {
          await instance.delete(`/api/contact/${id}`)
          await  getAllMessages();
          Swal.fire(
            'Eliminado!',
            'El mensaje se ha sido eliminado exitosamente.',
            'success'
          )
        }
      })
    }


  return (
    <div className='d-flex flex-column'>
        <h1 className='mb-5'>Bandeja de entrada</h1>
      <div className='d-flex flex-row gap-2'>

      { contactMessages !== null ?
        contactMessages.map((contactmessage, index) => (
          <Messages key={index} {...contactmessage} onDeleteMessage={onDeleteMessage}/>
          
          ) ) : (
            <h1>No hay mensajes en tu bandeja de entrada.</h1>
            )
          }
        </div>
    </div>
     
  )
}

export default ContactMessages