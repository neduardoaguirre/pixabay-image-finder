import React from 'react';

const Error = ({ message }) => {
  return (
    <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 p-3 text-center alert alert-danger">
      {message}
    </div>
  );
};

export default Error;
