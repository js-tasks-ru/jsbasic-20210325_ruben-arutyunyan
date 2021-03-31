function checkSpam(str) {
  str = str.toLowerCase();
  let spam = ['1xbet', 'xxx'];
  for (item of spam) {
    if (str.indexOf(item) >= 0) {
      return true;
    }
  }
  return false;
}
