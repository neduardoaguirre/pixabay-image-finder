import React from 'react';
import Image from './Image';
import Error from './Error';

const ImageListing = ({ images, empty }) => {
  const element =
    images.length === 0 && !empty ? (
      <Error message="Not found. Please try again." />
    ) : (
      images.map((image) => <Image key={image.id} image={image} />)
    );

  return <div className="col-12 row">{element}</div>;
};

export default ImageListing;
