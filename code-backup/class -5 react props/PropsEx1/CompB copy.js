let CompB = (props) => {
  return (
    <div>
      <h2>Component B</h2>
      <pre>{JSON.stringify(props)}</pre>
      <h1>Employee Name : {props.four.name}</h1>
    </div>
  );
};
export default CompB;
