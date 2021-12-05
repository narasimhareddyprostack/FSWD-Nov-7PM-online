class Bank {
  min_Bal = 500; //Property
  open_Account() {
    console.log("Account Opened Successfully");
  }
  deposit() {
    console.log("5000 INR Deposited");
  }
  withdraw() {}
  get_Statement() {}
  get_Balance() {}
}

let n_acc = new Bank();
let s_acc = new Bank();

n_acc.open_Account();
s_acc.open_Account();
n_acc.deposit();
