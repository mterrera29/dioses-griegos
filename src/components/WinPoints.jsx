import React from 'react'

const WinPoints = ({cant}) => {
  const puntosPartida = JSON.parse(localStorage.getItem(`puntosCant${cant}`))
  return (
   <>
   {
     puntosPartida && <div className='winPoints'>{puntosPartida}%</div>
   }
   </>
    )
}

export default WinPoints