function convertHTML(string) {
  const arr = [...string];
  for (let char of arr) {
    switch (char) {
      case "&":
        arr.splice(arr.indexOf(char), 1, "&amp;");
        break;
      case "<":
        arr.splice(arr.indexOf(char), 1, "&lt;");
        break;
      case ">":
        arr.splice(arr.indexOf(char), 1, "&gt;");
        break;
      case '"':
        arr.splice(arr.indexOf(char), 1, "&quot;");
        break;
      case "'":
        arr.splice(arr.indexOf(char), 1, "&apos;");
        break;
    }
  }
  return arr.join("");
}