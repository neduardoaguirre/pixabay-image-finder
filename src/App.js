import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import ImageListing from './components/ImageListing';
import Spinner from './components/Spinner';

function App() {
  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [empty, setEmpty] = useState(true);

  useEffect(() => {
    const callAPI = async () => {
      setLoading(true);
      const IMAGES_PER_PAGE = 36;
      const API_KEY = '18830736-e1b07399b7ae644ffcb8341db';
      const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${search}&per_page=${IMAGES_PER_PAGE}&page=${currentPage}`;
      const response = await fetch(URL);
      const data = await response.json();
      // console.log(images);
      if (data.hits.length === 0) {
        setEmpty(false);
        // console.log(empty);
      }
      setTimeout(() => {
        scroll();
        setLoading(false);
        setImages(data.hits);
        const totalPages = Math.ceil(data.totalHits / IMAGES_PER_PAGE);
        setTotalPages(totalPages);
      }, 1500);
    };
    callAPI();
  }, [search, currentPage]);

  const scroll = () => {
    const top = document.querySelector('.jumbotron');
    top.scrollIntoView({ behavior: 'smooth' });
  };

  const element = loading ? (
    <Spinner />
  ) : (
    <ImageListing images={images} empty={empty} />
  );

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center text-uppercase">Search for images</p>
        <Form setSearch={setSearch} setCurrentPage={setCurrentPage} />
      </div>
      <div className="row justify-content-center">{element}</div>
      <div className="row justify-content-center mb-3"></div>
    </div>
  );
}

export default App;
