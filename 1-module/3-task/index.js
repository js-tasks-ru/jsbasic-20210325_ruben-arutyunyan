function ucFirst(str) {
  if (str) {
    str = str[0].toUpperCase() + str.slice(1, str.length);
  }
  return str;
}
