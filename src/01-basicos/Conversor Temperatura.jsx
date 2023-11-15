import React, { useState } from 'react';

export default function ConversorTemperatura() {
  const [temperature, setTemperature] = useState('');
  const [system, setSystem] = useState(1);
  const [result, setResult] = useState('');

  function convert() {
    if (system === 1) {
      const result = (temperature * 9) / 5 + 32;
      setResult(result.toFixed(2)); 
    } else if (system === 2) {
      const result = ((temperature - 32) * 5) / 9;
      setResult(result.toFixed(2));
    }
  }

  return (
    <div className="container" id="contenedor-basico">
      <h3>6 - Conversor de temperatura</h3>
      <div className="input-group mb-3">
        <input
          type="number"
          className="form-control"
          placeholder="Introduce una temperatura..."
          value={temperature}
          onChange={(e) => setTemperature(parseInt(e.target.value, 10))}
        />
        <button
          type="button"
          className="btn btn-outline-secondary dropdown-toggle"
          data-bs-toggle="dropdown"
        >
          Sistema
        </button>
        <ul className="dropdown-menu dropdown-menu-end">
          <li>
            <a className="dropdown-item" onClick={() => setSystem(1)}>
              <i className="ri-celsius-line" />
              <i className="ri-arrow-right-line" />
              <i className="ri-fahrenheit-line" />
            </a>
          </li>
          <li>
            <a className="dropdown-item" onClick={() => setSystem(2)}>
              <i className="ri-fahrenheit-line" />
              <i className="ri-arrow-right-line" />
              <i className="ri-celsius-line" />
            </a>
          </li>
        </ul>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => convert()}
          style={{ borderRadius: '0 4px 4px 0' }}
          disabled={temperature === '' || system === ''}
        >
          Convertir
        </button>
      </div>
      {result !== '' && (
        <p style={{ textAlign: 'center', marginTop: '10px' }}>
          {temperature} Cº son <strong>{result} Fº</strong>
        </p>
      )}

      <button
        className="btn btn-outline-secondary btn-sm"
        onClick={() => {
          setTemperature('');
          setSystem(1);
          setResult('');
        }}
      >
        Reiniciar
      </button>
    </div>
  );
}
