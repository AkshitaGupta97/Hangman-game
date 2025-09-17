import { Routes, Route } from 'react-router-dom';
import './App.css'
import Landingpage from './Components/LandingPage/Landingpage'

import TextInputContainer from './InputForm/TextInputContainer';
import StartGame from './Components/LandingPage/Startgame/StartGame';


function App() {

  return (
    <div className='container'>
      <Routes>
      <Route path='/' element={<StartGame />}  />
      <Route path='/start' element={<Landingpage />} />
      </Routes>
      
    </div>
  )
}

export default App

// cd Hangman_Game_Ui