import { useState } from 'react';

export default function ContarVocales() {
  const [sentence, setSentence] = useState('');
  const [result, setResult] = useState(0);
  const vocals = ['a', 'e', 'i', 'o', 'u', 'ü', 'á', 'é', 'í', 'ó', 'ú'];

  function countVocals() {
    let totalVocals = 0;

    for (let i = 0; i < sentence.length; i++) {
      if (vocals.includes(sentence[i].toLocaleLowerCase())) {
        totalVocals++;
      }
    }
    setResult(totalVocals);
  }

  return (
    <>
      <div className="container" id="contenedor-basico">
        <h3>4 - Contar vocales</h3>

        <div className="input-group mb-3 ">
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Introduce una frase..."
              value={sentence}
              onChange={(e) => setSentence(e.target.value)}
              id="floatingTextarea2"
              style={{ height: '100px' }}
            />
            <label
              htmlFor="floatingTextarea2"
              //   no consigo poner el placeHolder en cursiva, uso lo de arriba por ahora
            >
              Introduce una frase...
            </label>
          </div>
          <button
            className="btn btn-outline-secondary btn-sm"
            type="button"
            id="button-addon2"
            onClick={() => countVocals()}
            disabled={sentence === ''}
          >
            Contar
          </button>
        </div>

        {result !== 0 && (
          <p
            style={{ textAlign: 'center', marginTop: '10px' }}
          >{`Esta frase tiene ${result} vocales`}</p>
        )}
        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={() => {
            setSentence('');
            setResult(0);
          }}
        >
          Reiniciar
        </button>
      </div>
    </>
  );
}
