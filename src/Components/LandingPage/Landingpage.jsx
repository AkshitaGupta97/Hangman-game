import React, { useState } from 'react';
import Maskedpage from './MaskedPage/Maskedpage';
import LetterBtn from './Letters/LetterBtn';
import { useLocation, useNavigate } from 'react-router-dom';

function Landingpage() {
  const [usedLetter, setUsedLetter] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const wordSelected = location.state?.wordSelected;

  const handleLetterClick = (letter) => {
    setUsedLetter([...usedLetter, letter]);
  };

  // Guard clause to prevent crash
  if (!wordSelected) {
    return (
      <div>
        <h1>Hangman Game</h1>
        <p style={{ color: 'red' }}>⚠️ No word selected. Please go back and start the game.</p>
        <button onClick={() => navigate('/')}>Go to Start</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Hangman Game</h1>
      <Maskedpage text={wordSelected} usedLetters={usedLetter} />
      <LetterBtn text={wordSelected} usedLetters={usedLetter} onLetterClick={handleLetterClick} />
    </div>
  );
}

export default Landingpage;
