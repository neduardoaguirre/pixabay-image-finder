import React from 'react';

const Image = ({ image }) => {
  const imgBox = {
    height: 150,
    overflow: 'hidden',
  };

  const { largeImageURL, likes, tags, views, previewURL } = image;
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card">
        <div style={imgBox}>
          <img src={previewURL} alt={tags} className="card-img-top" />
        </div>
        <div className="card-body">
          <p className="card-text">
            {likes} <strong>Likes</strong>
          </p>
          <p className="card-text">
            {views} <strong>Views</strong>
          </p>
        </div>
        <div className="card-footer">
          <a
            href={largeImageURL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-info btn-block"
          >
            See image
          </a>
        </div>
      </div>
    </div>
  );
};

export default Image;
