import CompB from "./CompB";
let CompA = () => {
  let a = 100;
  let size = [38, 40, 42, 44];
  let emp = { name: "Rahul Gandhi", sal: 45000 };
  return (
    <div>
      <h1> Component A </h1>
      <h5>value = {a}</h5>
      <hr />
      <CompB one={"Hello, Good evening"} two={a} three={size} four={emp} />
    </div>
  );
};
export default CompA;
