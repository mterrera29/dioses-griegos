import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppGame from './components/AppGame'
import './App.css'
import "./components/AppGame.css"
import MainGame from './components/MainGame';
import { PALEOLITICO_NEOLITICO } from './data';
import { PALEOLITICO } from './data_paleo';



function App (){
  return (
    <BrowserRouter>
      <Routes>
        <Route exact element={<MainGame />} path='/' />
        <Route exact element={<AppGame data={PALEOLITICO_NEOLITICO} />} path='/game' />
        <Route exact element={<AppGame data={PALEOLITICO} />} path='/game1' />
      </Routes>
    </BrowserRouter>
  )
}

export default App