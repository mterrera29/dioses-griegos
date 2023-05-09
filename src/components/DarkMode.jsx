import React from 'react'

const DarkMode = ({cambiarMode, darkMode}) => {
  const handleMode = ()=>{
     cambiarMode()
  }
  return (
    <div className='darkMode'
        onClick={handleMode}>{darkMode?"🌞":"🌙"}
    </div>
  )
}

export default DarkMode