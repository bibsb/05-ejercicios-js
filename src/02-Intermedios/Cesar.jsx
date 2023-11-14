import React, { useState } from 'react';

export default function Cesar() {
  const [sentence, setSentence] = useState('');
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');

  function cipherSentence() {
    // if (!sentence || !Number.isInteger(+number)) {
    //   setResult('Introduce una frase y un número entero');
    //   return;
    // }

    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const lowerCaseSentence = sentence.toLowerCase();

    let result = '';

    for (let i = 0; i < lowerCaseSentence.length; i++) {
      const char = lowerCaseSentence[i];

      if (alphabet.includes(char)) {
        const iOld = alphabet.indexOf(char);
        const iNew = (iOld + number) % 26;
        result += alphabet[iNew];
      } else {
        result += char;
      }
    }

    setResult(result);
  }

  return (
    <>
      <div className="container" id="contenedor-intermedio">
        <h3>5 - Cifrado César</h3>
        <div className="form-floating mb-3">
          <textarea
            className="form-control"
            placeholder="Introduce una frase para cifrar..."
            value={sentence}
            onChange={(e) => setSentence(e.target.value)}
            id="floatingTextarea2"
            style={{ height: '100px' }}
          />
          <label htmlFor="floatingTextarea2">Introduce una frase...</label>
        </div>
        <div className="input-group mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Introduce un número entero..."
            value={number}
            onChange={(e) => setNumber(parseInt(e.target.value, 10))}
          />
          <button
            className="btn btn-outline-secondary btn-sm"
            type="button"
            id="button-addon2"
            onClick={() => cipherSentence()}
            disabled={!sentence || !number}
          >
            Cifrado César
          </button>
        </div>
        {result !== '' && (
          <div>
            <p>Frase modificada:</p>
            <p style={{ textAlign: 'center' }}>
              <b>{result}</b>
            </p>
          </div>
        )}
        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={() => {
            setSentence('');
            setResult('');
            setNumber('');
          }}
        >
          Reiniciar
        </button>
      </div>
    </>
  );
}
