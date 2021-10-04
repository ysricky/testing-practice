const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const encrypt = (letter, key) => {
  const currentLetter = alphabet.indexOf(letter.toLowerCase());
  let ciphered;
  if (letter === letter.toUpperCase()) {
    ciphered = alphabet[(currentLetter + key) % 26].toUpperCase();
  } else {
    ciphered = alphabet[(currentLetter + key) % 26];
  }
  return ciphered;
};

const caesar = (string, key) => {
  const stringArray = string.split('');
  const secretWord = [];

  stringArray.forEach((l) => {
    if (alphabet.includes(l.toLowerCase())) {
      secretWord.push(encrypt(l, key));
    } else {
      secretWord.push(l);
    }
  });

  return secretWord.join('');
};

export default caesar;
