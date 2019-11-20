import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import ReduxThunk from "redux-thunk";

export const middlewares = [ ReduxThunk ];

export const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export const store = createStoreWithMiddleware(rootReducer);
