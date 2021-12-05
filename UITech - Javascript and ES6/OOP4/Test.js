class A {
  getA() {
    console.log("Test Case A");
  }
}
class B extends A {
  getB() {
    console.log("Test Case B");
  }
}
class C extends B {}
let obj = new C();
obj.getA();
obj.getB();
