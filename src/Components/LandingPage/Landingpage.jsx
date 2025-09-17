
import React, { useState } from 'react';
import Maskedpage from './MaskedPage/Maskedpage';
import LetterBtn from './Letters/LetterBtn';
//import TextInput from '../../InputForm/TextInput';
import TextInputContainer from '../../InputForm/TextInputContainer';
import { Link } from 'react-router-dom';

function Landingpage() {

  const [usedLetter, setUsedLetter] = useState([]);

  const handleLetterClick = (letter) => {
    setUsedLetter([...usedLetter, letter])
  }


  return (
    <div>
      <h1>Hangman Game</h1>
      <TextInputContainer />
      <Maskedpage text="humble" usedLetters={usedLetter} />
      <LetterBtn text="humble" usedLetters={usedLetter} onLetterClick={handleLetterClick} />
    </div>
  );
}

export default Landingpage;
