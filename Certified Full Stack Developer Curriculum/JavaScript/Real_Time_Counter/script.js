const textInput = document.querySelector("#text-input");
const characterCountLabel = document.querySelector("#char-count");

textInput.addEventListener("input", () => {
  characterCountLabel.textContent = `Character Count: ${textInput.value.length}/50`
  if (textInput.value.length > 50) {
    textInput.value = textInput.value.slice(0, 50);
    characterCountLabel.textContent = "Character Count: 50/50";
  } else if (textInput.value.length == 50) {
    characterCountLabel.style.color = "red";
  } else {
    characterCountLabel.style.color = "";
  }
})