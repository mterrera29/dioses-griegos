import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppGame from './components/AppGame'
import './App.css'
import MainGame from './components/MainGame';

function App (){
  return (
    <BrowserRouter>
      <Routes>
        <Route exact element={<MainGame />} path='/' />
        <Route exact element={<AppGame />} path='/game' />
      </Routes>
    </BrowserRouter>
  )
}

export default App