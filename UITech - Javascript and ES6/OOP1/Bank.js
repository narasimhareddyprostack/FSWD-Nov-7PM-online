class Bank {
  constructor(acc_id, acc_Name, acc_email) {
    this.acc_Id = acc_id;
    this.acc_Name = acc_Name;
    this.acc_email = acc_email;
  }
  open_Account() {
    console.log(`${this.acc_Name} : Account Opened Successfully`);
  }
}
let c1 = new Bank(101, "Narasimha", "greetlabs@gmail.com");
let c2 = new Bank(102, "Sujatha", "sujata@tcs.com");
let c3 = new Bank(103, "Suchi", "suchi@gmail.com");

c1.open_Account();
c2.open_Account();
c3.open_Account();
