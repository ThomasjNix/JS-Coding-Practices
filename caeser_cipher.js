const getCaeserCipher = (phrase, shiftAmount) => {
    const alphabet = [
        ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
        ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]];
    cipherPhrase = '';
    for (const letter of phrase) {
        cipherPhrase += getCipherLetter(alphabet, letter, shiftAmount);
    }
    console.log(`Original phrase: ${phrase}`);
    console.log(`Caeser cipher: ${cipherPhrase}`);
}

const getCipherLetter = (alphabetArr, letter, shiftAmount) => {
    let alphabetArrIndex = 0;
    let letterIndex = alphabetArr[0].indexOf(letter);
    if (letterIndex === -1) {
        letterIndex = alphabetArr[1].indexOf(letter);
        alphabetArrIndex = 1;
    }
    // Handle non-alphabetic, i.e. numbers, symbols, etc.
    if (letterIndex === -1) {
        return letter;
    } else {
        // Handle z (wrap back to beginning)
        if (letterIndex === alphabetArr[alphabetArrIndex].length - 1) {
            letterIndex = 0 + (shiftAmount - 1);
        } else {
            letterIndex = letterIndex + shiftAmount;
        }
        return alphabetArr[alphabetArrIndex][letterIndex];
    }
}

getCaeserCipher('This is a test string! It even handles uppercase letters!', 3);