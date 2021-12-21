//import redux action - types
import { INCR, DECR } from "./counter.action";
let initialState = { counter: 101 };

let counterReducer = (state = initialState, action) => {
  console.log(action.type);
  console.log(action.payload);
  switch (action.type) {
    case INCR:
      return { counter: state.counter + 1, heroName: action.payload };
    case DECR:
      return { counter: state.counter - 1, heroName: action.payload };
    default:
      return state;
  }
};
export { counterReducer };

//what is reducer?
/*
Reducer is pure function- no side effects
It will take two paramenter ie state, action
Reducer is pure function, it will update redux store/store state based on action type.

*/
