import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../../components/layout/Layout";
import VowelsContainer from "../../components/vowels/VowelsContainer";
import Memory from "../../components/memory/Memory";


function App() {
  return (
    
    <div className="App">
      <Layout >
{/*       <h1 className="mt-5">
      Home  */}
      <VowelsContainer/>
      <Memory/>
 {/*      </h1> */}
      </Layout>
    </div>
  );
}

export default App;
