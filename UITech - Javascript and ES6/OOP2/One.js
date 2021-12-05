class Parent {
  constructor() {
    console.log("Parent Class Constructor");
  }
}
class Child extends Parent {
  constructor() {
    super();
    console.log("Child Class Construcotr");
  }
  getInfo() {
    console.log("Class Child method - getinfo");
  }
}
let a = new Child();
a.getInfo();
a.getInfo();
a.getInfo();
a.getInfo();
a.getInfo();
