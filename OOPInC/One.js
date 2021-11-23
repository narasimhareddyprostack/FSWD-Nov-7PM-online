class Bank {
  min_Bal = 500;
  constructor(amount) {
    this.deposit_Amount = amount;
  }
}
class Savings_Account extends Bank {
  constructor(id, name, email, amount) {
    super(); //we are calling parent class constructor
    this.acc_id = id;
    this.acc_name = name;
    this.acc_email = email;
  }
}
let s = new Savings_Account(101, "Narasimha", "greetlabs@gmail.com", 500000);
console.log(s);
