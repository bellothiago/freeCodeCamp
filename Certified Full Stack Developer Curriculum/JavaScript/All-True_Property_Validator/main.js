function truthCheck(collection, property) {
  for (let i = 0; i < collection.length; i++) {
    if (!collection[i][property]) {
      return false;
    }
  }
  return true;
}