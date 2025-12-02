function confirmEnding(string1, string2){
  let endingString1 = string1.substring(string1.length - string2.length);
  return endingString1 === string2;
}