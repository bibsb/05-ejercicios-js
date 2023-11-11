import { useState } from 'react';

export default function ParImpar() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');

  function isEven() {
    if (number % 2 === 0) {
      setResult('Es par');
    } else {
      setResult('Es impar');
    }
  }

  return (
    <>
      <div className="container" id="contenedor-basico">
        <h3>2 - ¿ Es par o impar ?</h3>

        <div className="input-group mb-3 ">
          <input
            type="number"
            className="form-control"
            placeholder="Introduce número a comprobar..."
            value={number}
            onChange={(e) => setNumber(parseInt(e.target.value, 10))}
          />
          <button
            className="btn btn-outline-secondary btn-sm"
            type="button"
            id="button-addon2"
            onClick={() => isEven()}
            disabled={number === ''}
          >
            Comprobar
          </button>
        </div>

        <p>{result}</p>
        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={() => {
            setNumber('');
            setResult('');
          }}
        >
          Reiniciar
        </button>
      </div>
    </>
  );
}
