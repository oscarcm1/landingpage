import React, { useState } from 'react';
import './App.css';
import { Data } from './data/Data';

function App() {
  const [respuestasSeleccionadas, setRespuestasSeleccionadas] = useState([]);

  const manejarSeleccion = (opcion, preguntaIndex) => {
    // Actualizar el estado de las respuestas seleccionadas
    setRespuestasSeleccionadas((prevRespuestas) => {
      const nuevasRespuestas = [...prevRespuestas];
      nuevasRespuestas[preguntaIndex] = opcion;
      return nuevasRespuestas;
    });
  };

  const Validar = (preguntaIndex) => {
    // Validar la pregunta actual

    let active = ".format:nth-child(" + (preguntaIndex + 1) + ")";

    const respuestaCorrecta = Data[preguntaIndex].answer;
    const respuestaSeleccionada = respuestasSeleccionadas[preguntaIndex];

    console.log(respuestaCorrecta);
    console.log(respuestaSeleccionada);

    if (respuestaCorrecta === respuestaSeleccionada) {
      console.log(`Pregunta ${preguntaIndex + 1}: Correcta`);
      // document.querySelector(".format" ).classList.toggle("success");

      document.querySelector(active).classList.toggle("success");



    } else {
      console.log(`Pregunta ${preguntaIndex + 1}: Incorrecta`);
      // document.querySelector(".format").classList.toggle("error");
      document.querySelector(active).classList.toggle("error");
    }

  };

  return (
    <div className='container'>
      <h1>Sistema de Preguntas y Respuestas con Json</h1>
      <div className='card'>
        {Data.map((pregunta, index) => (
          <div className='format' key={index}>
            <p>{pregunta.question}</p>
            <div className='answer'>
              {pregunta.answers.map((ans, i) => (
                <div key={i} className='checkbox'>
                  <div>
                    <input
                      type="checkbox"
                      name={`pregunta_${index}_opcion_A`}
                      onChange={() => manejarSeleccion('A', index)}
                    />
                    {ans.A}
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      name={`pregunta_${index}_opcion_B`}
                      onChange={() => manejarSeleccion('B', index)}
                    />
                    {ans.B}
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      name={`pregunta_${index}_opcion_C`}
                      onChange={() => manejarSeleccion('C', index)}
                    />
                    {ans.C}
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      name={`pregunta_${index}_opcion_D`}
                      onChange={() => manejarSeleccion('D', index)}
                    />
                    {ans.D}
                  </div>
                </div>
              ))}
            </div>
            <div className='btn'>
              <button onClick={() => Validar(index)}>Revisar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
