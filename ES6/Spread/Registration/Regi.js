let user = {
  name: "Narasimha",
  email: "greetlabs@gmail.com",
  password: "123456",
  credit_Card: 45671234,
};
let newPassword = "falfjalflfajl;fk;asjf";
let new_CC = "434995597804783209578";

let new_user = { ...user, password: newPassword, credit_Card: new_CC };
console.log(user);
console.log(new_user);
