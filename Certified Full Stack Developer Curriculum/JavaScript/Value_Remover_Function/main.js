function destroyer(array, ...valuesToRemove) {
  return array.filter(element => !valuesToRemove.includes(element));
}