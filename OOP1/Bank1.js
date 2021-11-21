class Bank {
  min_Bal = 500;
  acc_Name;
  constructor(a) {
    this.acc_Name = a;
    this.min_Bal = 600;
  }
}
let c1 = new Bank("Sujatha");
console.log(c1.acc_Name);
console.log(c1.min_Bal);
