function filterRange(arr, a, b) {
  let result = [];
  if (a >= b) {
    for (let number of arr) {
      if (number >= b && number <= a) {
        result.push(number);
      }
    }
  } else {
    for (let number of arr) {
      if (number >= a && number <= b) {
        result.push(number);
      }
    }
  }
  return result;
}
