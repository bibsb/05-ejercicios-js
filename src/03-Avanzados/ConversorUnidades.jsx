import { useState } from 'react';

export default function ConversorUnidades() {
  const [length, setLength] = useState('');
  const [mass, setMass] = useState('');
  const [lengthMetricUnit, setLengthMetricUnit] = useState('');
  const [lengthBritUnit, setLengthBritUnit] = useState('');
  const [massMetricUnit, setMassMetricUnit] = useState('');
  const [massBritUnit, setMassBritUnit] = useState('');
  const [lengthResult, setLengthResult] = useState('');
  const [massResult, setMassResult] = useState('');

  const lengthUnits = {
    metric: ['km', 'm', 'dm'],
    brit: ['yard', 'foot', 'inch'],
  };

  const massUnits = {
    metric: ['t', 'kg'],
    brit: ['libra', 'pound', 'onza'],
  };

  const lengthTable = {
    km: {
      yard: 1.093,
      foot: 3.28,
      inch: 39.37,
    },
    m: {
      yard: 1.09361,
      foot: 3.28084,
      inch: 39.37,
    },
    dm: {
      yard: 0.11,
      foot: 0.33,
      inch: 3.94,
    },
  };

  const massTable = {
    t: {
      libra: 2.204,
      pound: 2.679,
      onza: 32.15,
    },
    kg: {
      libra: 2.20462,
      pound: 2.68,
      onza: 35.15,
    },
  };

  const convertLength = () => {
    const convertedLength =
      length * lengthTable[lengthMetricUnit][lengthBritUnit];
    setLengthResult(
      `${length} ${lengthMetricUnit} es igual a ${convertedLength.toFixed(
        2
      )} ${lengthBritUnit}`
    );
  };

  const convertMass = () => {
    const convertedMass = mass * massTable[massMetricUnit][massBritUnit];
    setMassResult(
      `${mass} ${massMetricUnit} es igual a ${convertedMass.toFixed(
        2
      )} ${massBritUnit}`
    );
  };

  return (
    <div className="container" id="contenedor-avanzado">
      <h3>Conversor de Unidades</h3>

      {/* longitud */}
      <div className="input-group mb-3">
        <input
          type="number"
          className="form-control"
          placeholder="Longitud..."
          value={length}
          onChange={(e) => setLength(parseFloat(e.target.value))}
        />

        <select
          className="form-select"
          value={lengthMetricUnit}
          onChange={(e) => setLengthMetricUnit(e.target.value)}
        >
          <option>Métrico</option>
          {lengthUnits.metric.map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>

        <select
          className="form-select"
          value={lengthBritUnit}
          onChange={(e) => setLengthBritUnit(e.target.value)}
        >
          <option>Brit|E.E.U.U</option>
          {lengthUnits.brit.map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>

        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => convertLength()}
          disabled={!length || !lengthMetricUnit || !lengthBritUnit}
        >
          Convertir
        </button>
      </div>

      {lengthResult && (
        <p style={{ textAlign: 'center', marginTop: '10px' }}>{lengthResult}</p>
      )}
      {/* masa */}
      <div className="input-group mb-3">
        <input
          type="number"
          className="form-control"
          placeholder="Masa..."
          value={mass}
          onChange={(e) => setMass(parseFloat(e.target.value))}
        />

        <select
          className="form-select"
          value={massMetricUnit}
          onChange={(e) => setMassMetricUnit(e.target.value)}
        >
          <option>Métrico</option>
          {massUnits.metric.map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>

        <select
          className="form-select"
          value={massBritUnit}
          onChange={(e) => setMassBritUnit(e.target.value)}
        >
          <option>Brit|E.E.U.U</option>
          {massUnits.brit.map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>

        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => convertMass()}
          disabled={!mass || !massMetricUnit || !massBritUnit}
        >
          Convertir
        </button>
      </div>

      {massResult && (
        <p style={{ textAlign: 'center', marginTop: '10px' }}>{massResult}</p>
      )}

      <button
        className="btn btn-outline-secondary btn-sm"
        onClick={() => {
          setLength('');
          setLengthMetricUnit('');
          setLengthBritUnit('');
          setLengthResult('');
          setMass('');
          setMassMetricUnit('');
          setMassBritUnit('');
          setMassResult('');
        }}
      >
        Reiniciar
      </button>
    </div>
  );
}
