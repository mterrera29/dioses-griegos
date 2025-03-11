import React from 'react';
import './GameContainer.css';
import TITLES from '../titles.js';
import { useState, useEffect } from 'react';
import { Respuestas } from './Respuestas';
import { ModalWin } from './ModalWin';
import { useIndex } from '../hooks/useIndex';
import { useSelect } from '../hooks/useSelect';
import { useCorrect } from '../hooks/useCorrect.js';
import { Image } from './Image.jsx';

export const GameContainer = ({ preguntasCant, darkMode, data }) => {
  const [shuffledConsignas, setShuffledConsignas] = useState(data.consignas);
  const { index, raiseIndex, reloadIndex } = useIndex();
  const { select, selected } = useSelect();
  const { isCorrect, puntos, isLoading, resetPts } = useCorrect({
    index,
    select,
  });
  const [winner, setWinner] = useState(false);

  useEffect(() => {
    setShuffledConsignas(data.consignas.sort(() => Math.random() - 0.5));
  }, [data]);

  const consignasData = shuffledConsignas[index];

  useEffect(() => {
    if (index === preguntasCant) {
      setWinner(true);
    }
  }, [index]);

  const reloaderGame = () => {
    selected();
    reloadIndex();
    setWinner(false);
    resetPts();
  };
  const siguiente = () => {
    raiseIndex();
    selected();
  };

  return (
    <>
      <h4
        className={
          darkMode
            ? 'animate__animated animate__fadeInDown titleGame dark'
            : 'animate__animated animate__fadeInDown titleGame'
        }
      >
        {TITLES[0].appTitle}
      </h4>
      {isLoading ? (
        <span className='loader'></span>
      ) : winner ? (
        <ModalWin
          winner={winner}
          reloaderGame={reloaderGame}
          puntos={puntos}
          preguntasCant={preguntasCant}
          data={data}
        />
      ) : (
        <>
          <section className='appContainer'>
            <div className='title'>
              {' '}
              <h1></h1>
            </div>
            <Image
              index={index}
              preguntasCant={preguntasCant}
              consignasData={consignasData}
              isCorrect={isCorrect}
              siguiente={() => siguiente()}
            />
            <div className='questions'>
              <h4>{consignasData.question}</h4>
            </div>
            <Respuestas consignasData={consignasData} />
            {/* <Siguiente isCorrect={isCorrect} siguiente={()=>siguiente()} /> */}
            <div className='puntos'>Pts : {puntos} </div>
          </section>
        </>
      )}
    </>
  );
};
