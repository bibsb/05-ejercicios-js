import { useState } from 'react';

export default function SumarPares() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState(0);
  const [count, setCount] = useState(0);
  function countEven() {
    let sum = 0;
    let count = 0;
    for (let i = 1; i <= number; i++) {
      if (i % 2 === 0) {
        sum += i;
        count++;
      }
    }
    setResult(sum);
    setCount(count);
  }

  return (
    <>
      <div className="container" id="contenedor-basico">
        <h3>5 - Suma los números pares</h3>
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
            onClick={() => countEven()}
            disabled={number === ''}
          >
            Contar
          </button>
        </div>

        {result !== 0 && (
          <p style={{ textAlign: 'center', marginTop: '10px' }}>
            {`Hay ${count} números pares desde el 1 al ${number} y suman `}
            <strong>{result}</strong>
          </p>
        )}
        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={() => {
            setNumber('');
            setResult(0);
          }}
        >
          Reiniciar
        </button>
      </div>
    </>
  );
}
