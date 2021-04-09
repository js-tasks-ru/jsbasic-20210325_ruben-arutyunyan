function showSalary(users, age) {
  let result = '';
  for (let user of users) {
    console.log(user);
    if (+user['age'] <= age) {
      result = result + user.name + ', ' + user.balance + '\n';
    }
  }
  return result.trim();
}