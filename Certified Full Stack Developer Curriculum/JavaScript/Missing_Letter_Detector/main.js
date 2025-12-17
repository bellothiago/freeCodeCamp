let alphabet = "abcdefghijklmnopqrstuvwxyz";

function fearNotLetter(string) {
  let correctedAlphabet = alphabet.slice(alphabet.indexOf(string[0]));
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== correctedAlphabet[i]) {
      return correctedAlphabet[i];
    }
  }
  return undefined;
}