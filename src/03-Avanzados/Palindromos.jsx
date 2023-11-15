import { useState } from 'react';

export default function Palindromos() {
  const [word, setWord] = useState('');
  const [result, setResult] = useState('');
  
  function verify() {
    const reversedWord = word.split('').reverse().join('');

    if (word === reversedWord) {
      setResult('Es un palíndromo');
    } else {
      setResult('No es un palíndromo');
    }
  }
  return (
    <>
      <div className="container" id="contenedor-avanzado">
        <h3>3 - Verificador de palíndromos</h3>
        <div className="input-group mb-3 ">
          <input
            type="text"
            className="form-control"
            placeholder="Introduce una palabra..."
            value={word}
            onChange={(e) => setWord(e.target.value.toLocaleLowerCase())}
          />
          <button
            className="btn btn-outline-secondary btn-sm"
            type="button"
            id="button-addon2"
            onClick={() => verify()}
            disabled={!word}
          >
            Verificar
          </button>
        </div>

        {result !== '' && (
          <p style={{ textAlign: 'center', marginTop: '10px' }}>{result}</p>
        )}

        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={() => {
            setWord(''), setResult('');
          }}
        >
          Reiniciar
        </button>
      </div>
    </>
  );
}
