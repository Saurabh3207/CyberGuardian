import React, { useState, useRef } from "react";
import FileUpload from "./components/SteganographyTool/FileUpload";
import styles from "./SteganographyTool.module.css";

const SteganographyTool = () => {
  const [originalImage, setOriginalImage] = useState(null);
  const [encodedImage, setEncodedImage] = useState(null);
  const [decodedMessage, setDecodedMessage] = useState("");
  const canvasRef = useRef(null);

  const handleEncode = async imageFile => {
    const image = await loadImage(imageFile);
    const secretMessage = prompt("Enter the secret message:");
    const encodedImage = encodeMessage(image, secretMessage);

    // Set the original and encoded images
    setOriginalImage(image);
    setEncodedImage(encodedImage);
    setDecodedMessage(""); // Clear any previous decoded message

    // Create a download link for the encoded image
    const downloadLink = document.createElement("a");
    downloadLink.href = encodedImage;
    downloadLink.download = "encoded_image.png";
    downloadLink.click();
  };

  const handleDecode = async encodedImageFile => {
    const encodedImage = await loadImage(encodedImageFile);
    const decodedMessage = decodeMessage(encodedImage);

    // Set the original and encoded images
    setOriginalImage(encodedImage);
    setEncodedImage(null); // Clear any previous encoded image
    setDecodedMessage(decodedMessage);
  };

  const loadImage = file => {
    return new Promise(resolve => {
      const reader = new FileReader();
      reader.onload = event => {
        const image = new Image();
        image.onload = () => resolve(image);
        image.src = event.target.result;
      };
      reader.readAsDataURL(file);
    });
  };

  const encodeMessage = (image, message) => {
    const canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0);

    // Encode the message using LSB steganography
    ctx.font = "20px Arial";
    ctx.fillStyle = "black";

    // Iterate through each character in the message
    for (let i = 0; i < message.length; i++) {
      const charCode = message.charCodeAt(i);

      // Encode the character code in the red channel's least significant bit
      for (let j = 0; j < 8; j++) {
        const bit = (charCode >> j) & 1;
        const pixel = ctx.getImageData(i, 0, 1, 1);
        pixel.data[0] = (pixel.data[0] & 0xfe) | bit; // Set the least significant bit
        ctx.putImageData(pixel, i, 0);
      }
    }

    // Convert the canvas to base64 image
    const encodedImage = canvas.toDataURL("image/png");
    return encodedImage;
  };

  const decodeMessage = image => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.drawImage(image, 0, 0);

    // Decode the message from the image
    const imageData = ctx.getImageData(0, 0, image.width, 1);
    let message = "";

    // Decode each character from the red channel's least significant bit
    for (let i = 0; i < imageData.width; i++) {
      let charCode = 0;

      for (let j = 0; j < 8; j++) {
        const bit = (imageData.data[i * 4] >> j) & 1;
        charCode |= bit << (7 - j);
      }

      message += String.fromCharCode(charCode);
    }

    return message.trim();
  };

  return (
    <div className={styles.container}>
      <h2>Steganography Tool</h2>

      {/* Encoding Section */}
      <div className={styles.section}>
        <h3>Encode Message</h3>
        <FileUpload
          onFileUpload={handleEncode}
          label="Upload Image to Encode"
        />
        {originalImage && (
          <img
            src={originalImage.src}
            alt="Original Image"
            className={styles.image}
          />
        )}
        {encodedImage && (
          <img
            src={encodedImage}
            alt="Encoded Image"
            className={styles.image}
          />
        )}
      </div>

      {/* Decoding Section */}
      <div className={styles.section}>
        <h3>Decode Message</h3>
        <FileUpload
          onFileUpload={handleDecode}
          label="Upload Encoded Image to Decode"
        />
        <canvas ref={canvasRef} className={styles.canvas} />
        {decodedMessage && (
          <div className={styles.decodedMessage}>
            Decoded Message: {decodedMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default SteganographyTool;
