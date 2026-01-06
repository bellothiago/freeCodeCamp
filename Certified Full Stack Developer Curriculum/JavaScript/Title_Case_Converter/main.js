function titleCase(sentence) {
  return sentence
    .trim()
    .split(/\s+/)
    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ")
}