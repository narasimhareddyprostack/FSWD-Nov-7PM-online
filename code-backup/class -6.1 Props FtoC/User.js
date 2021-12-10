import Employee from "./Employee";
let User = () => {
  let user_id = 101;
  let user_Name = "Rahul Gandhi";
  let loc = ["Bangalore", "New Delhi"];
  let user_Details = { nick_Name: "Rahul", sal: 45000 };
  return (
    <div>
      <h2>User Component </h2>
      <hr />
      <Employee
        id={user_id}
        name={user_Name}
        location={loc}
        details={user_Details}
      />
    </div>
  );
};
export default User;
