import { useState } from 'react';

export default function ValidarDNI() {
  const [document, setDocument] = useState('');
  const [type, setType] = useState('');
  const [result, setResult] = useState('');

  const checkDocument = () => {
    if (document.length === 9 && (type === 'DNI' || type === 'NIE')) {
      const number = document.slice(0, 8);
      const letter = document.slice(-1).toUpperCase();

      if (!isNaN(number)) {
        if (type === 'DNI') {
          checkDNI(number, letter);
        } else if (letter === 'X' || letter === 'Y' || letter === 'Z') {
          checkNIE(number, letter);
        } else {
          setResult('Introduce un DNI o NIE válido.');
        }
      } else {
        setResult('Introduce un DNI o NIE válido.');
      }
    } else {
      setResult('El documento debe contener 9 caracteres.');
    }
  };

  const checkDNI = (number, letter) => {
    const expectedLetter = calculateLetter(number);
    if (letter === expectedLetter) {
      setResult('El DNI es correcto.');
    } else {
      setResult('El DNI es incorrecto.');
    }
  };

  const calculateLetter = (numDNI) => {
    const validatedLetters = 'TRWAGMYFPDXBNJZSQVHLCKE';
    return validatedLetters[numDNI % 23];
  };

  const checkNIE = (number, initialLetter) => {
    const expectedLetter = calculateLetterNIE(number, initialLetter);
    if (expectedLetter === initialLetter) {
      setResult('El NIE es correcto.');
    } else {
      setResult('El NIE es incorrecto.');
    }
  };

  const calculateLetterNIE = (number, initialLetter) => {
    const validatedLetters = 'TRWAGMYFPDXBNJZSQVHLCKE';
    const nieNumber = initialLetter + number;
    return validatedLetters[nieNumber % 23];
  };

  return (
    <>
      <div className="container" id="contenedor-intermedio">
        <h3>1 - Validador de DNI</h3>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Introduce un DNI o NIE..."
            value={document}
            onChange={(e) => setDocument(e.target.value.toUpperCase())}
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
              <a
                className="dropdown-item"
                role="button"
                onClick={() => setType('DNI')}
              >
                DNI
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                role="button"
                onClick={() => setType('NIE')}
              >
                NIE
              </a>
            </li>
          </ul>
          <button
            type="button"
            className="btn btn-outline-secondary"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            onClick={() => checkDocument()}
            style={{ borderRadius: '0 4px 4px 0' }}
            disabled={!type || !document}
          >
            Validar
          </button>
        </div>

        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={() => {
            setDocument('');
            setType('');
          }}
        >
          Reiniciar
        </button>
      </div>
      {/* MODAL */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Validar Documento</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <p>{result}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
