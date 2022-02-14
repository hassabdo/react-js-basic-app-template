import { combineReducers } from "redux";
import { authReducer } from "./auth-reducer";
import { uiReducer } from "./ui-reducer";
import { serivcesReducer } from "./services-reducer";
import { blogReducer } from "./blog-reducer";

const RootReducer = combineReducers({
  authReducer,
  serivcesReducer,
  uiReducer,
  blogReducer,
});

export default RootReducer;
export type RootState = ReturnType<typeof RootReducer>;
