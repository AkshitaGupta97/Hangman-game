import { Routes, Route } from 'react-router-dom';
import './App.css'
import Landingpage from './Components/LandingPage/Landingpage'

import TextInputContainer from './InputForm/TextInputContainer';


function App() {

  return (
    <div className='container'>
      <Routes>
      <Route path='/' element={<TextInputContainer />}  />
      <Route path='/start' element={<Landingpage />} />
      </Routes>
      
    </div>
  )
}

export default App

// cd Hangman_Game_Ui