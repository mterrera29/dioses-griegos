import React from 'react'
import { RespuestasCaja } from './RespuestasCaja'

export const Respuestas = ({consignasData}) => {
  const answers = consignasData.answer
  return (
  <div className='respuestas'>
    {answers.map((a, indice)=> (
      <RespuestasCaja a={a} key={indice} indice={indice} consignasData={consignasData} />
    ))}
  </div>
  )
}
