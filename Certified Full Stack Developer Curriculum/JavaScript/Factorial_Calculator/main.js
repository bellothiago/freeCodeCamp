let num = 17;

function factorialCalculator(number) {
  let result = 1;
  for (let i = number; i > 1; i--) {
    result *= i;
  }
  return result;
}

let factorial = factorialCalculator(num);
let resultMsg = `Factorial of ${num} is ${factorial}`;

console.log(resultMsg);