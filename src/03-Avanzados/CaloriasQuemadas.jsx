import { useState } from 'react';

export default function CaloriasQuemadas() {
  const [distance, setDistance] = useState('');
  const [time, setTime] = useState('');
  const [speed, setSpeed] = useState('');
  const [result, setResult] = useState('');
  const [weight, setWeight] = useState('');

  const calculateCaloriesBurned = () => {};

  return (
    <div className="container" id="contenedor-avanzado">
      <h3>8 - Calculadora calorías quemadas en carrera</h3>

      <div className="row mb-3">
        <div className="col-4">
          <input
            type="number"
            className="form-control"
            placeholder="Peso (kg)..."
            value={weight}
            onChange={(e) => setWeight(parseFloat(e.target.value))}
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-4">
          <input
            type="number"
            className="form-control"
            placeholder="Distancia (km)..."
            value={distance}
            onChange={(e) => setDistance(parseFloat(e.target.value))}
          />
        </div>
        <div className="col-4">
          <input
            type="number"
            className="form-control"
            placeholder="Velocidad (km/h)..."
            value={speed}
            onChange={(e) => setSpeed(parseFloat(e.target.value))}
          />
        </div>
        <div className="col-4">
          <div className="input-group mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Tiempo (min)..."
              value={time}
              onChange={(e) => setTime(parseFloat(e.target.value))}
            />
            <button
              className="btn btn-outline-secondary btn-sm"
              type="button"
              id="button-addon2"
              onClick={() => calculateCaloriesBurned()}
              disabled={!distance || !time || !speed}
            >
              Calcular
            </button>
          </div>
        </div>
      </div>

      <p style={{ textAlign: 'center', marginTop: '10px' }}>{result}</p>
      <button
        className="btn btn-outline-secondary btn-sm"
        onClick={() => {
          setDistance('');
          setTime('');
          setSpeed('');
          setResult('');
          setWeight('');
        }}
      >
        Reiniciar
      </button>
    </div>
  );
}
