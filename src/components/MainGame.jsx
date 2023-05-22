import { useContext, useState } from "react";
import "./MainGame.css"
import DarkMode from './DarkMode';
import { Link } from "react-router-dom";
import { DarkModeContext } from "../context/darkMode";

const MainGame = () => {
  const {darkMode, setDarkMode} = useContext(DarkModeContext);

  const cambiarMode = () =>{
    darkMode ? setDarkMode(false) : setDarkMode(true)
  }
  
  return (
    <main className={darkMode ? 'mainGame dark':'mainGame'}>
      <DarkMode darkMode={darkMode} cambiarMode={()=>cambiarMode()} />
      <Link to="/game">
      <h1 className={darkMode?'mainTitle dark':'mainTitle'}>prehistoric games</h1>
      <div className="btnMain">¿Paleolítico o Neolítico?</div>
      </Link>
    </main>
  )
}

export default MainGame