import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../../components/layout/Layout";
import VowelsContainer from "../../components/vowels/VowelsContainer";
import Memory from "../../components/memory/Memory";
import SuggestionsBoard from "../../components/suggestions/SuggestionsBoard";
import DownloadBoard from "../../components/download/DownloadBoard";

function App() {
  return (
    
    <div className="App">
      <Layout >
      <VowelsContainer/>
      <Memory/>
      <SuggestionsBoard/>
      <DownloadBoard/>
      </Layout>
    </div>
  );
}

export default App;
