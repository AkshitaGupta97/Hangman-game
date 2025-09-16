
import React from 'react';
import Maskedpage from './MaskedPage/Maskedpage';

function Landingpage() {
  return (
    <div>
      <h1>Hangman Game</h1>
      <Maskedpage text="humble" usedLetters={['H', 'E']} />
    </div>
  );
}

export default Landingpage;
