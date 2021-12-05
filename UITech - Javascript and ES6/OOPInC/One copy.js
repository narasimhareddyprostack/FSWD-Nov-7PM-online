class Bank {
  min_Bal = 500;
}
class Savings_Account extends Bank {}
let s = new Savings_Account();
console.log(s);

class Current_Account extends Bank {}
let c = new Current_Account();
console.log(c);
