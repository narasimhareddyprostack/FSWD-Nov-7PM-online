import { GM, GN } from "./message.action";
let initialState = {
  message: "Hello..........",
};
let messageReducer = (state = initialState, action) => {
  console.log("messageReducer - Step 2");
  // update store/state based on action type.
  switch (action.type) {
    case GM:
      return { message: "Good Morning" };
    case GN:
      return { message: "Good Night" };
    default:
      return state;
  }
};

export { messageReducer };
