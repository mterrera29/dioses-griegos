import React from 'react';
import { Siguiente } from './Siguiente.jsx';

export const Image = ({
  consignasData,
  index,
  preguntasCant,
  isCorrect,
  siguiente,
}) => {
  return (
    <div className='image'>
      <img src={consignasData.img} alt='' />
      <span className='imgSpan'>
        {index + 1}/{preguntasCant}{' '}
      </span>
      {isCorrect === undefined ? (
        <h1 className='imageCorrect' style={{ display: 'none' }}></h1>
      ) : isCorrect ? (
        <h1
          className='imageCorrect'
          style={{ color: '#4cb84c', display: 'inline' }}
        >
          Correcto
        </h1>
      ) : (
        <h1 className='imageCorrect' style={{ color: '#d64040' }}>
          Incorrecto
        </h1>
      )}
      <Siguiente isCorrect={isCorrect} siguiente={siguiente} />
    </div>
  );
};
