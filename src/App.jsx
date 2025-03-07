import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppGame from './components/AppGame';
import './App.css';
import './components/AppGame.css';
import MainGame from './components/MainGame';
import { GRIEGOS } from './data_dioses';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact element={<MainGame />} path='/' />
        <Route exact element={<AppGame data={GRIEGOS} />} path='/game3' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
