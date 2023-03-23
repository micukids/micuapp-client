import React, { useEffect, useRef, useState} from "react";
import Boton_Parlante from "../../assets/img/Boton_Parlante.png";
import marimba from '../../assets/music/marta_abcchd_solo_marimbas.wav'
import silenciar from '../../assets/img/Boton_silenciar.png'

function MusicButton(props) {

    const audioReference = useRef(null);
    const [musicButton, setMusicButton] = useState(null);

    useEffect(() =>{
        if( props.musicIsPlaying) {
            setMusicButton(<img src={silenciar} alt="Boton para silenciar" />)
        } else{
            setMusicButton(<img src={Boton_Parlante} alt="Boton para musica" />)
        }
        
    }, [props.musicIsPlaying])

  return (
    <div className={`music-button-styles ${props.className}`} onClick={() => props.onClick(audioReference)}>
      <audio ref={audioReference} autoPlay loop>
        <source  src={marimba} type="audio/wav" />
      </audio>
        { musicButton}
    </div>
  );
}

export default MusicButton;
