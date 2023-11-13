import { useState } from 'react';

export default function EsPrimo() {
  const [primo, setPrimo] = useState(null);
  const [number, setNumber] = useState('');

  function esPrimo() {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        setPrimo(false);
        return;
      }
    }

    setPrimo(true);
  }

  console.log('Primo:', primo);
  return (
    <>
      <div className="container" id="contenedor-basico">
        <h3>9 - Adivina si es número primo</h3>
        <div className="input-group mb-3 ">
          <input
            type="number"
            className="form-control"
            placeholder="Introduce un número..."
            value={number}
            onChange={(e) => setNumber(parseInt(e.target.value, 10))}
          />
          <button
            className="btn btn-outline-secondary btn-sm"
            type="button"
            id="button-addon2"
            onClick={() => esPrimo()}
            disabled={number === ''}
          >
            Es primo ?
          </button>
        </div>
        {/* <input
          type="number"
          id="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value, 10))}
        /> */}
        {/* <button onClick={() => esPrimo()}>Es primo ?</button> */}
        {primo !== null && (
          <p id="resultado">{primo ? 'Es primo' : 'No es primo'}</p>
        )}
        <div>
          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={() => setNumber('')}
          >
            Reiniciar
          </button>
        </div>
      </div>
    </>
  );
}
