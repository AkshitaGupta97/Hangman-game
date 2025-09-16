import React from 'react'

const Alphabet = Array(26).fill('').map((e, idx) => String.fromCharCode(65 + idx));
// or you can do :-  'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('') 

function LetterBtn({usedLetters}) {
  const selectedLetter = new Set(usedLetters.join('').toUpperCase().split(''));

  const buttonStyle =  function(letter){
    if(selectedLetter.has(letter)){
      return 'bg-red-600 '
    }
    else {
      return 'bg-blue-600'
    }
  }
  
  const buttons = Alphabet.map(letter => {
    return (
      <button className={`${buttonStyle(letter)}`} key={`button-${letter}`}>
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