import './App.css';
import React, { useState } from 'react';

import SearchBar from './components/SearchBar';
import ImageResults from './components/ImageResults';
import CanvasEditor from './components/CanvasEditor';

function App() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  console.log("Selected Image:", selectedImage);

  return (
    <div className="App">
      <SearchBar setImages={setImages}/>
      <ImageResults images={images} onSelectImage={setSelectedImage}/>
      {/* {selectedImage && <CanvasEditor imageUrl={selectedImage.urls.full} />} */}
    </div>
  );
}

export default App;
