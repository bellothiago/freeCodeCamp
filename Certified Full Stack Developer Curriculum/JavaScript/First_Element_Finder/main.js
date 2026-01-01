function findElement(arr, func) {
  for (let element of arr) {
    if (func(element) == true) {
      return element;
    }
  }
  return undefined;
}