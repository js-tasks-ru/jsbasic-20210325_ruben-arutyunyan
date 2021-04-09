function camelize(str) {
  let arr = str.split('-');
  let arr2 = [];
  for (let i = 1; i < arr.length; i++) {
    arr2.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
  }
  return arr[0] + arr2.join('');
}