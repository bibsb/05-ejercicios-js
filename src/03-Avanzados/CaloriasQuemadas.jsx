import { useState } from 'react';

export default function CaloriasQuemadas() {
  // const [distance, setDistance] = useState('');
  const [time, setTime] = useState('');
  const [speed, setSpeed] = useState('');
  const [result, setResult] = useState('');
  const [weight, setWeight] = useState('');

  const calculateCaloriesBurned = () => {
    //http://www.hayqueapuntarlo.com/2008/09/caloras-quemadas.html
    //https://corriendovoy.com/cuantas-calorias-quemas-corriendo-haz-un-calculo-rapido/
    //cal quemadas en 1 min, cruce entre velocidad y peso
    const speedTable = {
      8.0: [7.1, 8.3, 9.4, 10.7, 11.8],
      8.8: [7.8, 9.0, 10.4, 11.7, 13.0],
      9.6: [9.4, 11.0, 12.5, 14.0, 15.7],
      10.4: [10.1, 11.9, 13.6, 15.2, 16.3],
      11.2: [10.9, 12.9, 14.4, 16.0, 17.0],
      12.0: [11.6, 13.4, 15.2, 16.8, 18.6],
      12.8: [12.1, 13.8, 15.5, 17.7, 19.2],
      13.6: [12.8, 14.6, 16.3, 18.0, 19.9],
      14.4: [13.6, 15.5, 17.3, 19.0, 21.0],
      15.2: [14.4, 16.4, 18.3, 20.0, 22.2],
    };

    
  };

  return (
    <div className="container" id="contenedor-avanzado">
      <h3>8 - Calculadora calorías quemadas en carrera (WIP)</h3>

      <div className="row mb-3">
        {/* <div className="col-4">
          <input
            type="number"
            className="form-control"
            placeholder="Distancia (km)..."
            value={distance}
            onChange={(e) => setDistance(parseFloat(e.target.value))}
          />
        </div> */}
        <div className="col-4">
          <input
            type="number"
            className="form-control"
            placeholder="Peso (kg)..."
            value={weight}
            onChange={(e) => setWeight(parseFloat(e.target.value))}
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
              disabled={!weight || !time || !speed}
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
          // setDistance('');
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
