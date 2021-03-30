import React from 'react';
import Image from './Image';
import Error from './Error';
import PropTypes from 'prop-types';

const ImageListing = ({ images, empty }) => {
  const element =
    images.length === 0 && !empty ? (
      <Error message="Not found. Please try again." />
    ) : (
      images.map((image) => <Image key={image.id} image={image} />)
    );

  return <div className="col-12 row">{element}</div>;
};

ImageListing.propTypes = {
  images: PropTypes.array.isRequired,
  empty: PropTypes.bool.isRequired,
};

export default ImageListing;
