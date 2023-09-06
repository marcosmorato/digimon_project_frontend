import { api } from "../../services/api/index";
import { AnyAction, Dispatch, Action } from "redux";
import { updateUsers, loginFailed, loginSuccess } from "./actions";
import { LOGIN_SUCCESS, LOGIN_FAILED } from "./actionsType";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { RootState, AppDispatch } from "../store";
import axios from "axios";

/* const loginSuccess = (data: any): AnyAction => ({
  type: "LOGIN_SUCCESS",
  payload: data,
}); */

const loginFailure = (error: any): AnyAction => ({
  type: "LOGIN_FAILURE",
  payload: error,
});

interface CustomAction<T = any> extends Action {
  type: string;
  payload?: T;
}

interface loginUserData {
  email: string;
  password: string;
}
interface registerUserData {
  email: string;
  password: string;
}

interface registerUserData {
  email: string;
  password: string;
  nickname: string;
  name: string;
  password_confirmation: string;
}

export const loginUserThunk = (
  userData: loginUserData
): ThunkAction<Promise<void>, RootState, unknown, AnyAction> => {
  return async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>,
    getState: () => any
  ) => {
    try {
      let users = getState().UsersReducer;
      const response = await api
        .post("/user/authenticate", {
          email: userData.email,
          password: userData.password,
        })
        .then((res) => {
          users = {
            loggedUser: {
              user: res.data,
            },
            isLogged: true,
          };
          return res.data;
        })
        .catch((error) => {
          console.log(error, "error ao fazer a requisição");
          return error;
        });
      console.log(users);
      dispatch(updateUsers(users));
    } catch (error) {
      console.error(error);
      dispatch(loginFailure(error));
    }
  };
};

export const registerUserThunk = (
  userData: registerUserData
): ThunkAction<Promise<void>, RootState, unknown, AnyAction> => {
  return async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>,
    getState: () => any
  ) => {
    try {
      const newUser = {
        email: userData.email,
        name: userData.name,
        nickname: userData.nickname,
        password: userData.password,
      };

      const response = await api
        .post("/user", newUser)
        .then((res) => {
          return res.data;
        })
        .catch((error) => {
          console.log(error, "error ao fazer a requisição");
          return error;
        });
      /* let users = getState().UsersReducer; */

      console.log(response);
      dispatch(loginSuccess(response));
    } catch (error) {
      console.error(error);
      dispatch(loginFailure(error));
    }
  };
};

/* setRegisterSuccess: (success: boolean) => void,
  setRegisterFailed: (failed: boolean) => void */
