import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ message }) => {
  return (
    <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 p-3 text-center alert alert-danger">
      {message}
    </div>
  );
};

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;
