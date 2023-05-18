import React from 'react'

export const Image = ({consignasData, index, preguntasCant}) => {
  return (
    <div className='image'>
      <img src={consignasData.img} alt="" />
      <span className='imgSpan'>{index +1}/{preguntasCant} </span>
    </div>
  )
}
