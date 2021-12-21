//what is redux action?
/*
    action is a function, and return object/actionalbe object.
    It return actionable object, it contains type and payload.
    we need to export action and actin types.
*/
const INCR = "INCR";
const DECR = "DECR";
let incrAction = () => {
  console.log("inside redux action - ie incrAction - function");
  return { type: INCR, payload: "Rajini Kanth" };
};

let decrAction = () => {
  return { type: DECR, payload: "Sharukhar" };
};

export { incrAction, decrAction, INCR, DECR };
