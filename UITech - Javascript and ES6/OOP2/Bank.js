class Account {
  constructor(amount) {
    this.amount = amount;
  }
}
class Saving_Account extends Account {
  constructor(id, name, email, amount) {
    super(amount);
    this.acc_id = id;
    this.acc_Name = name;
    this.acc_email = email;
  }
}
let a1 = new Saving_Account(101, "Narasimha", "greetlabs@gmail.com", 5000);
console.log(a1);

//how to initilize object values?
