import './App.css';
import React, { useState } from 'react'
import QRCode from 'qrcode.react'

const salt = 'методы цифровой трансформации в действии!'
function App() {
  const [qrString, setQrString] = useState('')

  function handleChange(event) {
    setQrString(event.target.value)
  }
  return (
    <div className="App">
      <input value={qrString} onChange={handleChange} />
      <h2>Кодируем строку с солью: {qrString}</h2>
      <h3> Соль: {salt}</h3>
      <QRCode value={salt + qrString} />
    </div>
  );
}

export default App;
