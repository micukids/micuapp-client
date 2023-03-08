import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainButton from "../../components/mainButton/MainButton";


function App() {
  return (
    <div className="App">
      <MainButton class='bt' text='Aprende todo el abecedario'/>
      <MainButton class='bt' text='¡Vamos a jugar memory!'/>
    </div>
  );
}

export default App;
