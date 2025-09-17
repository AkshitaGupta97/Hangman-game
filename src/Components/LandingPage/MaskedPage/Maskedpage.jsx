import React from 'react';
import { MaskedCharacter } from './Masked';

function Maskedpage({text, usedLetters }) {
  const letters = MaskedCharacter({word: text, usedLetter :usedLetters}).split('');

  return (
    <div>
      {letters.map((letter, idx) => (
        <span key={idx}>{letter}</span>
      ))}
    </div>
  );
}

export default Maskedpage;
