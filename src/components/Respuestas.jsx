import React from 'react';
import { RespuestasCaja } from './RespuestasCaja';

export const Respuestas = ({ consignasData }) => {
  function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
  }
  const answers = shuffleArray(consignasData.answer);

  return (
    <div className='respuestas'>
      {answers.map((a, indice) => (
        <RespuestasCaja
          a={a}
          key={indice}
          indice={indice}
          consignasData={consignasData}
        />
      ))}
    </div>
  );
};
