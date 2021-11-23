class Central_Govt {
  tax = 18;
  get_Tax() {
    console.log("Central Gov Tax");
  }
}
class State_Govt extends Central_Govt {
  tax1 = 28;
 /*  get_Tax() {
    console.log("State Gov Tax");
  } */
}

let s_Obj = new State_Govt();
console.log(s_Obj.tax);
console.log(s_Obj.tax1);
s_Obj.get_Tax();
