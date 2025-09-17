import React from 'react'

const Alphabet = Array(26).fill('').map((e, idx) => String.fromCharCode(65 + idx));
// or you can do :-  'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('') 

function LetterBtn({ text, usedLetters, onLetterClick }) {
  const selectedLetter = new Set(usedLetters.join('').toUpperCase().split(''));
  const originalCharacter = new Set(text.toUpperCase().split(''));

  const buttonStyle = function (letter) {
    if (selectedLetter.has(letter)) {
      return ` ${originalCharacter.has(letter) ? ' bg-green-400 border-green-500' : 'bg-gray-600'}`
    }
    else {
      return 'bg-blue-600'
    }
  }

  const handleClick = (event) => {
    const character = event.target.value;
    onLetterClick?.(character)
  }

  const buttons = Alphabet.map(letter => {
    return (
        <button value={letter} disabled={selectedLetter.has(letter)}
          className={`${buttonStyle(letter)} gap-2 mr-3 px-4 w-16 mt-2 text-fuchsia-100 text-2xl`} key={`button-${letter}`} onClick={handleClick}>
          {letter}
        </button>
    )
  })

  return (
    <div>
      {buttons}
    </div>
  )
}

export default LetterBtn