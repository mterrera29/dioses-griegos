import React from 'react'
import CONSIGNAS from '../data.js'
import { useState, useEffect } from 'react'
import { Respuestas } from './Respuestas'
import { ModalWin } from './ModalWin'
import { useIndex } from '../hooks/useIndex'
import { useSelect } from '../hooks/useSelect'
import { Siguiente } from './Siguiente.jsx'
import { useCorrect } from '../hooks/useCorrect.js'
import { Image } from './Image.jsx'

const shuffledConsignas = CONSIGNAS.sort(() => Math.random() - 0.5);

export const GameContainer = ({preguntasCant}) => {
  const {index, raiseIndex, reloadIndex} = useIndex()
  const {select, selected} = useSelect({index})
  const {isCorrect, puntos, isLoading, resetPts} = useCorrect({index, select})
  const [winner, setWinner] = useState (false)
  const consignasData = shuffledConsignas[index]

  useEffect(() => {
    if(index === preguntasCant){
      setWinner(true)
    }
  }, [index])

  const reloaderGame =()=>{
    selected()
    reloadIndex()
    setWinner(false)
    resetPts()
  } 
  const siguiente = ()=>{
    raiseIndex()
    selected();
  }

  return (
    <>
      {isLoading ?
      <span className='loader'></span>
      :winner?
      <ModalWin winner={winner} reloaderGame={reloaderGame} puntos={puntos} preguntasCant={preguntasCant}/>
      :
      <section className='appContainer'>
        <div className='puntos'>Puntos: {puntos} de {preguntasCant}</div>
        <div className='title'>
          {isCorrect === undefined? <h1></h1>: isCorrect?<h1 style={{color:"green"}}>Correcto</h1>:<h1 style={{color:"red"}}>Incorrecto</h1>}
        </div>
        <Image index={index} preguntasCant={preguntasCant} consignasData={consignasData} />
        <div className='questions'>
          <h4>{consignasData.question}</h4>
        </div>
        <Respuestas select={select} selected={selected} consignasData={consignasData} />
        <Siguiente isCorrect={isCorrect} siguiente={siguiente} />
      </section>
    }
  </>
  )
}
