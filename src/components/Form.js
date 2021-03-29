import React, { useState } from 'react';
import Error from './Error';

const Form = ({ setSearch, setCurrentPage }) => {
  const [topic, setTopic] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (topic.trim() === '') {
      setError(true);
      return;
    }
    setError(false);
    setSearch(topic);
    // setCurrentPage(1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row justify-content-center">
        <div className="form-group col-12 col-md-8 col-lg-6">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Get images by topic"
            onChange={(e) => setTopic(e.target.value)}
          />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="form-group col-12 col-md-8 col-lg-6">
          <input
            type="submit"
            className="btn btn-lg btn-info btn-block"
            value="Search"
          />
        </div>
      </div>
      {error ? <Error message="Please, add search topic" /> : null}
    </form>
  );
};

export default Form;
