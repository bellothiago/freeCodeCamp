function smallestCommons(array) {
  let [minimum, maximum] = array.sort((a, b) => a - b);

  function greatestCommonDivisor(a, b) {
    return b === 0 ? a : greatestCommonDivisor(b, a % b);
  }

  function leastCommonMultiple(a, b) {
    return (a * b) / greatestCommonDivisor(a, b);
  }

  let result = minimum;
  for (let i = minimum + 1; i <= maximum; i++) {
    result = leastCommonMultiple(result, i);
  }

  return result;
}