import {
    legacy_createStore,
    combineReducers,
    applyMiddleware ,
  } from "redux";
import { authreducer } from "./auth//authReducer";
import { todoReducer } from "./TodoApp/todoReducer";
import thunk from "redux-thunk"


const rootReducer = combineReducers({
   auth:authreducer,
   todo:todoReducer
})

export const store = legacy_createStore(
   rootReducer, 
   applyMiddleware(thunk));

