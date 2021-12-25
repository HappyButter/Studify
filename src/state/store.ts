import { applyMiddleware, createStore, Middleware, Store, Action } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { socketMiddleware } from "./middlewares";
import thunk from "redux-thunk";

import rootReducer, { StoreState } from "./reducers";

export const configureStore = () => {
	const middlewares: Middleware[] = [thunk, socketMiddleware];
	const middlewareEnhancer = applyMiddleware(...middlewares);
	const enhancers = [middlewareEnhancer];

	const composedEnhancers = composeWithDevTools(...enhancers);
	const store = createStore(rootReducer, composedEnhancers);

	return store;
};
