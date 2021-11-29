const bcrypt = require("bcryptjs"); //es5
let user = {
  name: "Narasimha",
  email: "greetlabs@gmail.com",
  password: "123456",
  credit_card: "1234567812345678",
};
let salt = bcrypt.genSaltSync(10);
let newPassword = bcrypt.hashSync(user.password, salt);
let newCC = bcrypt.hashSync(user.credit_card, salt);

let new_User = { ...user, password: newPassword, credit_card: newCC };
console.log(new_User);

let result = bcrypt.compareSync("123456", new_User.password);
if (result) {
  console.log("Login Successfully");
} else {
  console.log("Login failed");
}
