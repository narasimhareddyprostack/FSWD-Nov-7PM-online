let cust_Id = 5445455;
let cust_Name = "Narasimha Reddy";
let info = { name: "Narasimha", sal: 45000 };

//export { cust_Id, cust_Name, info };  //ES6 Named Export
module.exports = { cust_Id, cust_Name, info }; //ES5 - Named Export
