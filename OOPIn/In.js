class Parent {
  P_Assets = 300000;
  getQualities() {
    console.log("Parent Class Method ....");
  }
}
class Child extends Parent {
  assets = 200000;
  get_More_Assets() {
    console.log("Child Class Method");
  }
}

let obj = new Child();
console.log(obj.P_Assets);
console.log(obj.assets);
obj.getQualities();
obj.get_More_Assets();
