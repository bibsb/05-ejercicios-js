import React, { useState } from 'react';

export default function InteresCompuesto() {
  const [initCapital, setInitCapital] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [years, setYears] = useState('');
  const [result, setResult] = useState('');

  const calculateInterest = () => {
    const CI = parseFloat(initCapital);
    const i = parseFloat(interestRate) / 100;
    const n = parseInt(years, 10) * 12; // convierto a meses
    const CF = CI * Math.pow(1 + i, n);
    setResult(`El capital acumulado es: ${CF.toFixed(2)}`);
  };

  return (
    <>
      <div className="container" id="contenedor-avanzado">
        <h3>2 - Calculadora de interés compuesto</h3>
        <h1>WIP tengo mal la , </h1>
        <p>
          url dnd he mirado
          https://www.gerencie.com/formula-para-calcular-el-interes-compuesto.html
        </p>

        <div className="row mb-3">
          <div className="col-3">
            <input
              type="number"
              className="form-control"
              placeholder="Capital inicial..."
              value={initCapital}
              onChange={(e) => setInitCapital(e.target.value)}
            />
          </div>
          <div className="col-3">
            <input
              type="number"
              className="form-control"
              placeholder="Tasa de interés..."
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
            />
          </div>

          <div className="col-6">
            <div className="input-group mb-3">
              <input
                type="number"
                className="form-control"
                placeholder="Años..."
                value={years}
                onChange={(e) => setYears(e.target.value)}
              />
              <button
                className="btn btn-outline-secondary btn-sm"
                type="button"
                id="button-addon2"
                style={{ paddingLeft: 50, paddingRight: 50 }}
                onClick={() => calculateInterest()}
                disabled={!initCapital || !interestRate || !years}
              >
                Calcular
              </button>
            </div>
          </div>
        </div>

        {result !== '' && (
          <div>
            <p style={{ textAlign: 'center', marginTop: '10px' }}>{result}</p>
          </div>
        )}

        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={() => {
            setInitCapital('');
            setInterestRate('');
            setYears('');
            setResult('');
          }}
        >
          Reiniciar
        </button>
      </div>
    </>
  );
}
