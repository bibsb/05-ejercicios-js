import { useState } from 'react';

export default function ContadorPalabras() {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');
  function countWords() {
    const words = text.split(' ');
    let sum = 0;

    for (let i = 0; i < words.length; i++) {
      if (words[i].trim() !== '') {
        sum++;
      }
    }
    setResult(sum);
  }
  return (
    <>
      <div className="container" id="contenedor-basico">
        <h3>4 - Contador de palabras</h3>
        {/* <p>Busca el número entre 1 y 100</p> */}
        <div className="input-group mb-3 ">
          <input
            type="text"
            className="form-control"
            placeholder="Introduce una frase..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className="btn btn-outline-secondary btn-sm"
            type="button"
            id="button-addon2"
            onClick={() => countWords()}
            disabled={!text}
          >
            Adivina el número
          </button>
        </div>

        {result !== '' && (
          <p id="resultado">
            Hay <b>{result}</b> palabra(s)
          </p>
        )}

        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={() => {
            setText(''), setResult('');
          }}
        >
          Reiniciar
        </button>
      </div>
    </>
  );
}
