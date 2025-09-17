
export function MaskedCharacter({word='', usedLetter = []}) {
// this function will return all the character of word that has been guessed so far
 //   usedLetter = usedLetter.map(letter  => letter.toUpperCase());
    const guessedLetter = new Set(usedLetter);
    const character = word.toUpperCase().split('').map((char) => {
        if(guessedLetter.has(char)){
            return char;
        }
        return '_';
    });
    return character.join(' ,  ');
}
