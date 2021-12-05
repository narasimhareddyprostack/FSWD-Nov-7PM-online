class Product {
  constructor() {
    console.log("Executed only once!");
  }
  get_Product_Details() {
    console.log("Product Info");
  }
}
let obj1 = new Product();
obj1.get_Product_Details();
obj1.get_Product_Details();
obj1.get_Product_Details();
obj1.get_Product_Details();
