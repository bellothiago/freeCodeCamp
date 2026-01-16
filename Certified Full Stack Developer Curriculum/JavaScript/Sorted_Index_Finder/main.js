function getIndexToIns(array, number) {
  array.sort((a, b) => a - b);
  const index = array.findIndex(element => element >= number)
  return index === -1 ? array.length : index;
}