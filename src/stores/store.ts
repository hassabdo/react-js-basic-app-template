import { applyMiddleware, createStore } from "redux";
import reducers from "../reducers";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
const logger = createLogger({
  collapsed: true,
  colors: {
    title: () => "#0B698F",
    prevState: () => "#7286E9",
    action: () => "#bd2839",
    nextState: () => "#1DB954",
    error: () => "#FF534D",
  },
});
let store: any;
let middleware : any = [];

if (process.env.NODE_ENV === 'development') {
  middleware = applyMiddleware(thunk, logger);
} else {
  middleware = applyMiddleware(thunk);
}

store = createStore(reducers, middleware);

export default store;
