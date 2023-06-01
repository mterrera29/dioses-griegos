import React from 'react'
import { Siguiente } from './Siguiente.jsx'

export const Image = ({consignasData, index, preguntasCant, isCorrect, siguiente}) => {
  return (
    <div className='image'>
      <img src={consignasData.img} alt="" />
      <span className='imgSpan'>{index +1}/{preguntasCant} </span>
      <Siguiente isCorrect={isCorrect} siguiente={siguiente} />
    </div>
  )
}
