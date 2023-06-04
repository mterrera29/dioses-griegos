import { useContext, useState } from "react";
import TITLES from "../titles";
import "./MainGame.css"
import DarkMode from './DarkMode';
import { Link } from "react-router-dom";
import { DarkModeContext } from "../context/darkMode";
import { PALEOLITICO_NEOLITICO } from "../data";
import { PALEOLITICO } from "../data_paleo";

const MainGame = () => {
  const {darkMode, setDarkMode} = useContext(DarkModeContext);

  const cambiarMode = () =>{
    darkMode ? setDarkMode(false) : setDarkMode(true)
  }
  
  return (
    <main className={darkMode ? 'mainGame dark':'mainGame'}>
      <DarkMode darkMode={darkMode} cambiarMode={()=>cambiarMode()} />
      <h1 className={darkMode?'mainTitle dark animate__animated animate__fadeInDown':'mainTitle animate__animated animate__fadeInDown'}>{TITLES[0].appTitle}</h1>
      <section className="mainLinks">
        <Link to="/game1">
        <div className="btnMain">{PALEOLITICO.gameTitle}</div>
        </Link>
        <Link to="/game">
        <div className="btnMain" >{PALEOLITICO_NEOLITICO.gameTitle}</div>
        </Link>
      </section>
    </main>
  )
}

export default MainGame