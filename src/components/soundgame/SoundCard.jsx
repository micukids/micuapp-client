import React, { useRef } from 'react'

function SoundCard({image, sound, letter}) {
    const audioReference = useRef(null);

    const handleClick = () => {
        audioReference.current.paused ? audioReference.current.play() : audioReference.current.pause()
    }

  return (
    <div onClick={handleClick} className="image-btn" >    
            <img src={image} alt={`Imagen de la letra ${letter}`} />
            <audio ref={audioReference}>
                <source src={sound} type="audio/mp3"/>
            </audio>
    </div>
  )
}

export default SoundCard