import React, { useState, useEffect, useRef } from "react";

const asciiChars = "@%#*+=-:. ";

const ImageToAscii = ({ imagePath, outputWidth = 100 }) => {
  const [asciiArt, setAsciiArt] = useState("");
  const canvasRef = useRef(null);

  useEffect(() => {
    const convertToAscii = async () => {
      const img = new Image();
      img.src = imagePath;
      await img.decode();

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      const aspectRatio = img.height / img.width;
      const outputHeight = Math.floor(outputWidth * aspectRatio * 0.55);

      canvas.width = outputWidth;
      canvas.height = outputHeight;
      ctx.drawImage(img, 0, 0, outputWidth, outputHeight);

      const imageData = ctx.getImageData(0, 0, outputWidth, outputHeight);
      let asciiStr = "";

      for (let y = 0; y < outputHeight; y++) {
        for (let x = 0; x < outputWidth; x++) {
          const index = (y * outputWidth + x) * 4;
          const r = imageData.data[index];
          const g = imageData.data[index + 1];
          const b = imageData.data[index + 2];
          const brightness = (r + g + b) / 3;
          const asciiIndex = Math.floor((brightness / 255) * (asciiChars.length - 1));
          asciiStr += asciiChars[asciiIndex];
        }
        asciiStr += "\n";
      }

      setAsciiArt(asciiStr);

      // Draw ASCII to canvas for PNG download
      const downloadCanvas = document.createElement("canvas");
      const downloadCtx = downloadCanvas.getContext("2d");
      downloadCanvas.width = outputWidth * 8;
      downloadCanvas.height = outputHeight * 12;
      downloadCtx.fillStyle = "white";
      downloadCtx.fillRect(0, 0, downloadCanvas.width, downloadCanvas.height);
      downloadCtx.fillStyle = "black";
      downloadCtx.font = "10px monospace";

      asciiStr.split("\n").forEach((line, i) => {
        downloadCtx.fillText(line, 10, 12 * (i + 1));
      });

      canvasRef.current = downloadCanvas;
    };

    convertToAscii();
  }, [imagePath, outputWidth]);

  const downloadAsciiImage = () => {
    if (!canvasRef.current) return;
    const link = document.createElement("a");
    link.href = canvasRef.current.toDataURL("image/png");
    link.download = "ascii_art.png";
    link.click();
  };

  return (
    <div>
      <pre style={{ whiteSpace: "pre-wrap", fontSize: '16px' }}>{asciiArt}</pre>
      <button onClick={downloadAsciiImage}>Download as PNG</button>
    </div>
  );
};

export default ImageToAscii;
