function mutation(array) {
  const string1 = array[0].toLowerCase();
  const string2 = array[1].toLowerCase();
  for (let letter of string2) {
    if (!string1.includes(letter)) {
      return false;
    }
  }
  return true;
}