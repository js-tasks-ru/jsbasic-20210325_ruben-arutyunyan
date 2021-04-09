function getMinMax(str) {
  let numbers = str.replace(/,/g, ' ').split(' ');
  let result = {
    min: null,
    max: null,
  };
  for (let number of numbers) {
    if (+number < result.min) result.min = +number;
    if (+number >= result.max) result.max = +number;
  }
  return result;
}