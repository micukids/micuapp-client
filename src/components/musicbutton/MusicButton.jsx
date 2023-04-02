import React, { useEffect, useRef, useState} from "react";
import Boton_Parlante from "../../assets/img/Boton_Parlante.png";
import silenciar from '../../assets/img/Boton_silenciar.png'

function MusicButton(props) {
    const marimba = 'https://play.micukids.com/play/memorycards/marta_abcchd_marimbas.mp3';
    const audioReference = useRef(null);
    const [musicButton, setMusicButton] = useState(null);

    useEffect(() =>{
        if( props.musicIsPlaying) {
          setMusicButton(<img src={Boton_Parlante} alt="Boton para musica" />)
        } else{
          setMusicButton(<img src={silenciar} alt="Boton para silenciar" />)
        }
        
    }, [props.musicIsPlaying])

  return (
    <div className={`music-button-styles ${props.className}`} onClick={() => props.onClick(audioReference)}>
      <audio ref={audioReference} autoPlay loop>
        <source  src={marimba} type="audio/mp3" />
      </audio>
        { musicButton}
    </div>
  );
}

export default MusicButton;
