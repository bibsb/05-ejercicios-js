import { useState } from 'react';

export default function IMC() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState('');
  const [categoryColor, setCategoryColor] = useState('');

  const calculateIMC = () => {
    if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
      setResult('Por favor, introduce valores válidos para peso y altura.');
      setCategoryColor('');
      return;
    }

    const imc = weight / (height * height);

    let category = '';
    let color = '';
    if (imc < 18.5) {
      category = 'Bajo peso';
      color = 'red';
    } else if (imc >= 18.5 && imc <= 24.9) {
      category = 'Normal';
      color = 'green';
    } else if (imc >= 25 && imc <= 30) {
      category = 'Sobrepeso';
      color = 'orange';
    } else {
      category = 'Obesidad';
      color = 'red';
    }

    setResult(
      <>
        <span style={{ color }}>{category}</span>
        <br />
        {`Tu índice de masa corporal es ${imc.toFixed(2)}`}
      </>
    );
    setCategoryColor(color);
  };

  return (
    <>
      <div className="container" id="contenedor-avanzado">
        <h3>4 - Calculadora de IMC</h3>

        <div className="row">
          <div className="col-5">
            <input
              type="number"
              className="form-control"
              placeholder="Introduce el peso..."
              value={weight}
              onChange={(e) => setWeight(parseFloat(e.target.value))}
            />
          </div>

          <div className="col-7">
            <div className="input-group mb-3">
              <input
                type="number"
                className="form-control"
                placeholder="Introduce la altura.."
                value={height}
                onChange={(e) => setHeight(parseFloat(e.target.value))}
              />
              <button
                className="btn btn-outline-secondary btn-sm"
                type="button"
                id="button-addon2"
                onClick={() => calculateIMC()}
                disabled={!weight || !height}
              >
                Calcular IMC
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
            setWeight('');
            setHeight('');
            setResult('');
            setCategoryColor('');
          }}
        >
          Reiniciar
        </button>
      </div>
    </>
  );
}
