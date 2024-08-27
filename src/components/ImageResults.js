import React from "react";

const ImageResults = ({ images, onSelectImage }) => {
  return (
    <div className="image-results">
      {images.map((image) => (
        <div key={image.id} className="image-item">
          <img src={image.urls.small} alt={image.alt_description} />
          <button onClick={() => onSelectImage(image)}>Add Captions</button>
        </div>
      ))}
    </div>
  );
};

export default ImageResults;

