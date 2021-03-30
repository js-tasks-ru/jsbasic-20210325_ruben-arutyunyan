function factorial(n) {
  let f = n;
  if ((n === 0) || (n === 1)) {
    return 1;
  } else {
    while (n > 1) {
      f *= --n;
    }
    return f;
  }
}
