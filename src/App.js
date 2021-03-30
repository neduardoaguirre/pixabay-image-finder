import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
      const URL = `/.netlify/functions/getImages?search=${search}&per_page=${IMAGES_PER_PAGE}&page=${currentPage}`;
      const response = await axios.get(URL);
      const data = response.data;
      if (data.hits.length === 0) {
        setEmpty(false);
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

  const backPage = () => {
    const newCurrentPage = currentPage - 1;
    if (newCurrentPage === 0) return;
    setCurrentPage(newCurrentPage);
  };

  const nextPage = () => {
    const newCurrentPage = currentPage + 1;
    if (newCurrentPage > totalPages) return;
    setCurrentPage(newCurrentPage);
  };

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
        <Form setSearch={setSearch} />
      </div>
      <div className="row justify-content-center">{element}</div>
      <div className="row justify-content-center mb-3">
        {currentPage === 1 || loading ? null : (
          <button
            type="button"
            className="btn btn-info mr-1"
            onClick={backPage}
          >
            Back &laquo;
          </button>
        )}
        {currentPage === totalPages || totalPages === 0 || loading ? null : (
          <button type="button" className="btn btn-info" onClick={nextPage}>
            Next &raquo;
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
