class Order {
  constructor() {
    console.log(
      "Order Constructor executed only once at time of object creation"
    );
  }
}

new Order();
new Order();
