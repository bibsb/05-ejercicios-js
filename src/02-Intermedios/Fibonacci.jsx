import { useState } from 'react';

export default function Fibonacci() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');

  function checkFibonacci() {
    if (number < 0) {
      setResult(
        'No es un número Fibonacci.\nLos números Fibonacci son siempre positivos'
      );
      return;
    } else if (number === 0 || number === 1) {
      setResult('Es número Fibonacci');
      return;
    } else {
      // creo números hasta llegar al userInput
      let a = 0;
      let b = 1;
      let f = a + b;

      while (f < number) {
        a = b;
        b = f;
        f = a + b;
      }

      if (f === number) {
        setResult('Es número Fibonacci.');
      } else {
        setResult('No es un número Fibonacci.');
      }
    }
  }

  return (
    <>
      <div className="container" id="contenedor-intermedio">
        <h3>2 - Comprobar números Fibonacci</h3>
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
            onClick={() => checkFibonacci()}
            disabled={!number}
          >
            Comprobar
          </button>
        </div>

        <p id="resultado">{result}</p>

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
