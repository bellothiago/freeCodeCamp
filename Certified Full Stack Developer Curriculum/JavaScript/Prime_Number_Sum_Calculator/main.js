function sumPrimes(number) {
  function isPrime(number) {
    if (number < 2) return false;
    for (let i = 2; i * i <= number; i++) {
      if (number % i === 0) return false;
    }
    return true;
  }

  let sum = 0;
  for (let i = 2; i <= number; i++) {
    if (isPrime(i)) sum += i;
  }

  return sum;
}