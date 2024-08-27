import React, { useRef, useEffect } from 'react';
const fabric = require('fabric');

const CanvasEditor = ({ imageUrl, onClose }) => {
  const canvasRef = useRef(null);
  const fabricCanvasRef = useRef(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current);
    fabricCanvasRef.current = canvas;

    const loadImage = () => {
      if (imageUrl) {
        console.log("Loading image from URL:", imageUrl);

        const imgElement = new Image();
        imgElement.crossOrigin = 'anonymous'; 
        imgElement.src = imageUrl;

        imgElement.onload = () => {

          const img = new fabric.Image(imgElement, {
            left: 0,
            top: 0,
            scaleX: canvas.width / imgElement.width,
            scaleY: canvas.height / imgElement.height,
            selectable: false,
          });

          canvas.add(img);
          canvas.renderAll();
        };

        imgElement.onerror = (error) => {
          console.error("Error loading image:", error);
        };
      }
    };

    loadImage(); 
    return () => {
      if (fabricCanvasRef.current) {
        fabricCanvasRef.current.dispose(); 
      }
    };
  }, [imageUrl]);

  const handleAddText = () => {
    const canvas = fabricCanvasRef.current;
    if (canvas) {
      const text = new fabric.Text('Sample Text', {
        left: 100,
        top: 100,
        fontSize: 20,
        fill: '#000000',
      });
      canvas.add(text);
      canvas.renderAll();
    }
  };

  const handleAddShape = (shapeType) => {
    const canvas = fabricCanvasRef.current;
    if (canvas) {
      let shape;
      switch (shapeType) {
        case 'circle':
          shape = new fabric.Circle({
            radius: 50,
            fill: 'red',
            left: 150,
            top: 150,
          });
          break;
        case 'rect':
          shape = new fabric.Rect({
            width: 100,
            height: 100,
            fill: 'blue',
            left: 200,
            top: 200,
          });
          break;
        default:
          break;
      }
      if (shape) {
        canvas.add(shape);
        canvas.renderAll();
      }
    }
  };

  const handleDownload = () => {
    const canvas = fabricCanvasRef.current;
    if (canvas) {
      const dataURL = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = dataURL;
      link.download = 'canvas-image.png';
      link.click();
    }
  };

  return (
    <div className="CanvasEditor">
      <canvas ref={canvasRef} width={800} height={600} />
      <div className="shape-buttons">
        <button onClick={handleAddText}>Add Text</button>
        <button onClick={() => handleAddShape('circle')}>Add Circle</button>
        <button onClick={() => handleAddShape('rect')}>Add Rectangle</button>
        <button onClick={handleDownload}>Download</button>
      </div>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default CanvasEditor;
