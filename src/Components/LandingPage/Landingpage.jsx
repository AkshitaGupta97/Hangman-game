
import React from 'react';
import Maskedpage from './MaskedPage/Maskedpage';
import LetterBtn from './Letters/LetterBtn';

function Landingpage() {
  return (
    <div>
      <h1>Hangman Game</h1>
      <Maskedpage text="humble" usedLetters={['H', 'E']} />
      <LetterBtn usedLetters={['H', 'E']} />
    </div>
  );
}

export default Landingpage;
