function repeatStringNumTimes(string, number) {
  let repeatedString = "";
  if (number <= 0) {
    return ""
  }
  for (let i = 0; i < number; i++) {
    repeatedString += string;
  }
  return repeatedString;
}