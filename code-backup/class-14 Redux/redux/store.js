import { createStore } from "redux";
import { messageReducer } from "./Message/message.reducer";
import { rootReducer } from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";


//let store = createStore(messageReducer, composeWithDevTools());
let store = createStore(rootReducer, composeWithDevTools());

export { store };
