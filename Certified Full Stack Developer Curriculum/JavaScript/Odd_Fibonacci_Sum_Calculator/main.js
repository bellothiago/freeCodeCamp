function sumFibs(num) {
  let previous = 0;
  let current = 1;
  let sum = 0;
  while (current <= num) {
    if (current % 2 !== 0) {
      sum += current;
    }
    [previous, current] = [current, previous + current];
  }
  return sum
}