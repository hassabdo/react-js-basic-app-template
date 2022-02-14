import {
  GET_AUTH
} from "./types";


export function getAuthUser(status: boolean) {
  return async (dispatch: any) => {
    await dispatch({
      type: GET_AUTH,
      payload: {
        isLoggedIn: status,
      },
    });
  };
}
