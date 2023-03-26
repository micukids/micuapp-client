import React, { useState } from "react";
import Boton_Parlante from "../../assets/img/Boton_Parlante.png";
import silenciar from "../../assets/img/Boton_silenciar.png";

function Mute() {
  const [mute, setMute] = useState(false);


  const handleMute = () => {
    if (!mute) {
        setMute(!mute);
        Array.from(document.querySelectorAll('audio, video')).forEach(el => el.muted = true);
    } else {    
        Array.from(document.querySelectorAll('audio, video')).forEach(el => el.muted = false)
        setMute(!mute);
    }
  }

  return (
  <div className="music-button-styles" onClick={handleMute}> 
    <img src={!mute ? Boton_Parlante : silenciar } alt="Boton para silenciar" />
  </div>
  );
}

export default Mute;
