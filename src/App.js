import React, { useState } from 'react';
import Form from './components/Form';

function App() {
  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center text-uppercase">Search for images</p>
        <Form setSearch={setSearch} setCurrentPage={setCurrentPage} />
      </div>
      <div className="row justify-content-center"></div>
      <div className="row justify-content-center mb-3"></div>
    </div>
  );
}

export default App;
