let longestWordLength = 0;

function findLongestWordLength(string) {
  const words = string.trim().split(" ");
  for (let word of words) {
    if (longestWordLength < word.length) {
      longestWordLength = word.length;
    }
  }

  return longestWordLength;
}