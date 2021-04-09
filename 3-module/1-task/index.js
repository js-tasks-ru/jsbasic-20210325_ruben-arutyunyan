function namify(users) {
  let output = [];
  for (let user of users) {
    output.push(user.name);
  }
  return output;
}