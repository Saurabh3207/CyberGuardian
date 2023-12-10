import React, { useState } from 'react';
import './CaesarCipher.css'; // Import the CSS file for styling

const CaesarCipher = () => {
  const [text, setText] = useState('');
  const [shift, setShift] = useState(0);
  const [result, setResult] = useState('');
  const [isEncrypt, setIsEncrypt] = useState(true);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleShiftChange = (e) => {
    setShift(parseInt(e.target.value, 10));
  };

  const handleEncryptChange = (e) => {
    setIsEncrypt(e.target.checked);
  };

  const handleProcess = () => {
    let processedText = '';
    const shiftAmount = isEncrypt ? shift : -shift;

    for (let i = 0; i < text.length; i++) {
      const charCode = text.charCodeAt(i);

      if (/[a-zA-Z]/.test(text[i])) {
        const isUpperCase = text[i] === text[i].toUpperCase();
        const offset = isUpperCase ? 65 : 97;
        const encryptedCharCode = ((charCode - offset + shiftAmount + 26) % 26) + offset;

        processedText += String.fromCharCode(encryptedCharCode);
      } else {
        processedText += text[i];
      }
    }

    setResult(processedText);
  };

  return (
    <div className="caesar-cipher-container">
      <h1>Caesar Cipher Tool</h1>
      <div className="input-container">
        <label>
          Text:
          <input type="text" value={text} onChange={handleTextChange} />
        </label>
      </div>
      <div className="input-container">
        <label>
          Shift:
          <input type="number" value={shift} onChange={handleShiftChange} />
        </label>
      </div>
      <div className="input-container">
        <label>
          Encrypt:
          <input type="checkbox" checked={isEncrypt} onChange={handleEncryptChange} />
        </label>
      </div>
      <button onClick={handleProcess}>{isEncrypt ? 'Encrypt' : 'Decrypt'}</button>
      <div className="result-container">
        <h2>Result:</h2>
        <p>{result}</p>
      </div>
    </div>
  );
};

export default CaesarCipher;
