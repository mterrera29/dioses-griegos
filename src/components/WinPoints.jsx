import React from 'react'

const WinPoints = ({cant, data}) => {
  const puntosPartida = JSON.parse(localStorage.getItem(`${data.gameTitle}-${cant}`))
  return (
   <>
   {
     puntosPartida && <div className='winPoints'>{puntosPartida}%</div>
   }
   </>
    )
}

export default WinPoints