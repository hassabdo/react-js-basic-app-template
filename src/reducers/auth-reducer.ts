import { Reducer, AnyAction } from "redux";
import {
  GET_AUTH
} from "../actions/auth-actions/types";

const INITIAL_STATE: any = {
  isLoggedIn: false,
};

export const authReducer: Reducer<any, AnyAction> = (
  state: any = INITIAL_STATE,
  action
): boolean => {
  if(action.type === GET_AUTH){
    return {
      ...state,
      isLoggedIn: action.payload.isLoggedIn
    };
  }else{
    return state;
  }
};
