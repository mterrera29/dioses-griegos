import React from 'react'
import { RespuestasCaja } from './RespuestasCaja'

export const GameContainer = ({puntos, isCorrect, index, select, selected, siguiente, consignasData, preguntasCant}) => {
  const answers = consignasData.answer
  const handleSig=()=>{
    siguiente()
  }
  return (
    <section className='appContainer'>
      <div className='puntos'>Puntos: {puntos} de {preguntasCant}
      </div>
        <div className='title'>
          {isCorrect === undefined? <h1></h1>: isCorrect?<h1 style={{color:"green"}}>Correcto</h1>:<h1 style={{color:"red"}}>Incorrecto</h1>}
        </div>
        <div className='image'>
          <img src={consignasData.img} alt="" />
          <span className='imgSpan'>{index +1}/{preguntasCant} </span>
        </div>
        <div className='questions'>
          <h4>{consignasData.question}</h4>
        </div>
        <div className='respuestas'>
          {answers.map((a, indice)=> (
            <RespuestasCaja a={a} select={select} selected={selected} key={indice} consignasData={consignasData} />
          ))}
        </div>
        {isCorrect=== undefined?
        <></>:
        <div className='btnSiguiente'
            onClick={handleSig}>Siguiente
        </div>
      }
      </section>
  )
}
