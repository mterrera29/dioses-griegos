import { useState } from "react";
import "./MainGame.css"
import DarkMode from './DarkMode';
import { Link } from "react-router-dom";

const MainGame = () => {
  const [darkMode, setDarkMode] = useState(false);

  const cambiarMode = ()=>{
    darkMode?setDarkMode(false):setDarkMode(true)
  }
  
  return (
    <main className={darkMode?'mainGameDark':'mainGame'}>
      <DarkMode darkMode={darkMode} cambiarMode={cambiarMode}/>
      <Link to="/game">
      <div className="btnMain">Comenzar Juego!</div>
      </Link>
      </main>
  )
}

export default MainGame