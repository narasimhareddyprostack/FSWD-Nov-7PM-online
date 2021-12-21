const GM = "GM";
const GN = "GN";

let gmAction = () => {
  console.log("gmAction - step 1");
  return { type: GM };
};

let gnAction = () => {
  return { type: GN };
};

//What is action?
/*
action is function, return one object , {}
*/

export { gmAction, gnAction, GM, GN };
//exporting as named export
