const textInput = document.querySelector("#text-input");
const checkButton = document.querySelector("#check-btn");
const result = document.querySelector("#result");

function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

checkButton.addEventListener("click", () => {
  const original = textInput.value
  if(original.trim() === "") {
    alert("Please input a value");
    return
  }

  const cleaned = original
  .toLowerCase()
  .replace(/[^a-z0-9]/g, "");

  isPalindrome(cleaned)
  ? result.textContent = `${original} is a palindrome`
  : result.textContent = `${original} is not a palindrome`;
})