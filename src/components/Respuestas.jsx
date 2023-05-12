import React from 'react'
import { RespuestasCaja } from './RespuestasCaja'

export const Respuestas = ({select, selected, consignasData}) => {
  const answers = consignasData.answer
  return (<div className='respuestas'>
    {answers.map((a, indice)=> (
      <RespuestasCaja a={a} select={select} selected={selected} key={indice} consignasData={consignasData} />
    ))}
  </div>
  )
}
