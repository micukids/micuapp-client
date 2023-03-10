import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../../components/layout/Layout";
import VowelsContainer from '../../components/vowels/VowelsContainer'


function App() {
  return (
    
    <div className="App">
      <Layout >
      <VowelsContainer/>
      </Layout>
    </div>
  );
}

export default App;
