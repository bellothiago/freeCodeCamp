function sumAll (arr) {
  const smallest = Math.min(...arr);
  const largest = Math.max(...arr);
  let solution = 0;
  for (let i = smallest; i <= largest; i++) {
    console.log(i)
    solution += i
  }
  return solution
}