import React from 'react'

function NameCard ({letter}) {

  return (
    <>
    <div className='m-1 p-0'>
        <p className= "nameCard text-white text-center font-weight-bolder display-1 mx-auto d-block" >
        {letter}
        </p>
    </div>
    </>
  )
}

export default NameCard