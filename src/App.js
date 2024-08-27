import './App.css';
import React, { useState } from 'react';

import SearchBar from './components/SearchBar';
import ImageResults from './components/ImageResults';
import CanvasEditor from './components/CanvasEditor';

function App() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleCloseEditor = () => {
    setSelectedImage(null); 
  };

  return (
    <div className="App">
      <p>Shefali Sharma</p>
      <p>shefalis078@gmail.com</p>
      <SearchBar setImages={setImages} />
      <ImageResults images={images} onSelectImage={setSelectedImage} />
      {selectedImage && (
        <CanvasEditor
          imageUrl={selectedImage.urls.full}
          onClose={handleCloseEditor}
        />
      )}
    </div>
  );
}

export default App;
