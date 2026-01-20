function steamrollArray(array) {
  let flattenedArray = [];
  
  array.forEach(element => {
    if (Array.isArray(element)) {
      flattenedArray.push(...steamrollArray(element))
    } else {
      flattenedArray.push(element)
    }
  })
  return flattenedArray;
}