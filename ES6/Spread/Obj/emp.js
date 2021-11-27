let user = { name: "Narasimha", sal: 45000, email: "info@prostack.in" };
let details = { name: "Narasimha", email: "narasimha@tcs.com" };
let user_Details = { ...user, ...details };
console.log(user_Details);
//{ name: 'Narasimha', sal: 45000, email: 'narasimha@tcs.com' }
