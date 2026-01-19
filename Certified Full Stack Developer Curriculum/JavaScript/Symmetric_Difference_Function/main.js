function diffArray(arr1, arr2) {
  return arr1
    .filter(word => !arr2.includes(word))
    .concat(arr2.filter(word => !arr1.includes(word)));
}