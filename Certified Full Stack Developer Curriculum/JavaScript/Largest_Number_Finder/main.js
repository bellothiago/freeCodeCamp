function largestOfAll(arr) {
  const largestArr = [];
  for (let subarr of arr) {
    let largest = -999;
    for (let num of subarr) {
      if (largest < num) {
        largest = num;
      }
    }
    largestArr.push(largest);
  }
  return largestArr
}