import React, { useState } from 'react';

function App() {
  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);
  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center text-uppercase">Search for images</p>
      </div>
      <div className="row justify-content-center"></div>
      <div className="row justify-content-center mb-3"></div>
    </div>
  );
}

export default App;
