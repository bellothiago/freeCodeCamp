function uniteUnique(...arr) {
  let sortedArray = []
  for (let arrs of arr) {
    for (let elm of arrs) {
      if (!sortedArray.includes(elm)) {
        sortedArray.push(elm);
      }
    }
  }
  return sortedArray
}