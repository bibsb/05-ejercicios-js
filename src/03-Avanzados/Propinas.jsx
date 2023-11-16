import { useState } from 'react';

export default function Propinas() {
  const [total, setTotal] = useState('');
  const [percentage, setPercentage] = useState('');
  const [result, setResult] = useState('');

  const calculateTips = () => {
    const tipAmount = (total * percentage) / 100;
    const totalAmount = parseFloat(total) + tipAmount;
    setResult(
      <p>
        {`La propina es: ${tipAmount.toFixed(2)} Total con propina: `}
        <strong>{totalAmount.toFixed(2)}€</strong>
      </p>
    );
  };

  return (
    <>
      <div className="container" id="contenedor-avanzado">
        <h3>5 - Calculadora de propinas</h3>

        <div className="row">
          <div className="col-5">
            <input
              type="number"
              className="form-control"
              placeholder="Introduce el total de la cuenta..."
              value={total}
              onChange={(e) => setTotal(parseFloat(e.target.value))}
            />
          </div>

          <div className="col-7">
            <div className="input-group mb-3">
              <input
                type="number"
                className="form-control"
                placeholder="Introduce el % de propina..."
                value={percentage}
                onChange={(e) => setPercentage(parseFloat(e.target.value))}
              />
              <button
                className="btn btn-outline-secondary btn-sm"
                type="button"
                id="button-addon2"
                onClick={calculateTips}
                disabled={!total || !percentage}
              >
                Calcular Propina
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
            setTotal('');
            setPercentage('');
            setResult('');
          }}
        >
          Reiniciar
        </button>
      </div>
    </>
  );
}
