const regexPattern = document.querySelector("#pattern");
const stringToTest = document.querySelector("#test-string");
const testButton = document.querySelector("#test-btn");
const testResult = document.querySelector("#result");

const caseInsensitiveFlag = document.querySelector("#i");
const globalFlag = document.querySelector("#g");

function getFlags() {
  let flags = "";
  if (caseInsensitiveFlag.checked) flags += "i";
  if (globalFlag.checked) flags += "g";
  return flags;
}

testButton.addEventListener("click", () => {
  const pattern = regexPattern.value;
  const flags = getFlags();

  if (!pattern) {
    testResult.textContent = "No pattern provided";
    return;
  }

  const regex = new RegExp(pattern, flags);
  const text = stringToTest.innerHTML;
  const matches = text.match(regex);

  if (matches) {
    const highlightedText = text.replace(regex, match => `<span class="highlight">${match}</span>`)
    stringToTest.innerHTML = highlightedText;

    testResult.textContent = matches.join(", ");
  } else {
    testResult.textContent = "no match";
  }
})