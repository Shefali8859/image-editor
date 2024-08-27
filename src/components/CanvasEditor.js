// import React, { useRef, useEffect, useState } from "react";
// import { fabric } from "fabric";

// const CanvasEditor = ({ imageUrl, onClose }) => {
//   const canvasRef = useRef(null);
//   const [canvas, setCanvas] = useState(null);

//   useEffect(() => {
//     const initCanvas = () => {
//       const fabricCanvas = new fabric.Canvas(canvasRef.current);
//       setCanvas(fabricCanvas);

//       if (imageUrl) {
//         fabric.Image.fromURL(
//           imageUrl,
//           (img) => {
//             img.set({
//               left: 0,
//               top: 0,
//               scaleX: fabricCanvas.width / img.width,
//               scaleY: fabricCanvas.height / img.height,
//               selectable: false,
//             });
//             fabricCanvas.add(img);
//             fabricCanvas.renderAll();
//           },
//           { crossOrigin: "anonymous" }
//         );
//       }
//     };

//     initCanvas();

//     return () => {
//       canvas?.dispose(); // Cleanup on unmount
//     };
//   }, [imageUrl]);

//   const addText = () => {
//     if (canvas) {
//       const text = new fabric.IText("Your Caption Here", {
//         left: 100,
//         top: 100,
//         fontSize: 20,
//         fill: "#000",
//       });
//       canvas.add(text);
//       canvas.setActiveObject(text);
//       canvas.renderAll();
//     }
//   };

//   const addShape = (type) => {
//     if (canvas) {
//       let shape;
//       switch (type) {
//         case "circle":
//           shape = new fabric.Circle({
//             left: 100,
//             top: 100,
//             radius: 50,
//             fill: "transparent",
//             stroke: "#000",
//             strokeWidth: 2,
//           });
//           break;
//         case "rectangle":
//           shape = new fabric.Rect({
//             left: 100,
//             top: 100,
//             width: 100,
//             height: 100,
//             fill: "transparent",
//             stroke: "#000",
//             strokeWidth: 2,
//           });
//           break;
//         case "triangle":
//           shape = new fabric.Triangle({
//             left: 100,
//             top: 100,
//             width: 100,
//             height: 100,
//             fill: "transparent",
//             stroke: "#000",
//             strokeWidth: 2,
//           });
//           break;
//         // Add other shapes as needed
//         default:
//           return;
//       }
//       canvas.add(shape);
//       canvas.setActiveObject(shape);
//       canvas.renderAll();
//     }
//   };

//   const downloadImage = () => {
//     if (canvas) {
//       const dataURL = canvas.toDataURL({ format: "png" });
//       const link = document.createElement("a");
//       link.href = dataURL;
//       link.download = "canvas-image.png";
//       link.click();
//     }
//   };

//   return (
//     <div className="canvas-editor">
//       <div className="canvas-container">
//         <canvas ref={canvasRef} width={800} height={600} />
//       </div>
//       <div className="controls">
//         <button onClick={addText}>Add Text</button>
//         <button onClick={() => addShape("circle")}>Add Circle</button>
//         <button onClick={() => addShape("rectangle")}>Add Rectangle</button>
//         <button onClick={() => addShape("triangle")}>Add Triangle</button>
//         <button onClick={downloadImage}>Download Image</button>
//         <button onClick={onClose}>Close</button>
//       </div>
//     </div>
//   );
// };

// export default CanvasEditor;
