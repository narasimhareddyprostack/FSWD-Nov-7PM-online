let cars = [
  { name: "Skoda", Model: "Rapid", price: 1600000 },
  { name: "VW", Model: "polo", price: 900000 },
  { name: "Marithi", Model: "swift", price: 600000 },
  { name: "Skoda", Model: "Kushaq", price: 2000000 },
  { name: "Kia", Model: "Seltos", price: 1600000 },
];
//display cars price under 10,00,000
/* for (car of cars) {
  if (car.price < 1000000) {
    new_cars.push(car);
  }
} */
/* let new_cars = cars.filter((car) => {
  return car.price <= 1000000;
}); */
let new_cars = cars.filter((car) => car.price <= 1000000);

console.log(new_cars);
