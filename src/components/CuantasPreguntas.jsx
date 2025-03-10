import React from 'react';
import WinPoints from './WinPoints';
import winStar from '../images/asets/star.png';

export const CuantasPreguntas = ({ cuantasPreguntas, data }) => {
  const preguntasCant = data.questionQuantity;

  function handleClick(cant) {
    cuantasPreguntas(cant);
  }

  function isWin(cant) {
    const puntosPartida = JSON.parse(
      localStorage.getItem(`${data.gameTitle}-${cant}`)
    );
    if (puntosPartida) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <section className='appContainer'>
      <section className='cuantasPregModal'>
        <h3 className='pregTitle'>{data.gameTitle}</h3>
        {preguntasCant.map((cant, indice) => (
          <div
            key={indice}
            className='btnCant'
            onClick={() => handleClick(cant)}
          >
            {cant} preguntas
            {isWin(cant) && <img className='winIcon' src={winStar} alt='' />}
            <WinPoints cant={cant} data={data} />
          </div>
        ))}
      </section>
    </section>
  );
};
