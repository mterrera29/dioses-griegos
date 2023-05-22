import React from 'react'

const DarkMode = ({cambiarMode, darkMode}) => {
  return (
    <div className='darkMode'
        onClick={cambiarMode}>{darkMode?"🌞":"🌙"}
    </div>
  )
}

export default DarkMode