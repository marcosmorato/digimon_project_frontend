import { AnyAction } from "redux";
import { UPDATE_USERS, LOGIN_SUCCESS, LOGIN_FAILED } from "./actionsType";

interface LoggedUser {
  user: {
    name: string;
    nickname: string;
  };
}

interface UsersState {
  loggedUser: LoggedUser;
  isLogged: boolean;
}

export const updateUsers = (newState: UsersState): AnyAction => ({
  type: UPDATE_USERS,
  newState: newState,
});

export const loginSuccess = (data: UsersState): AnyAction => ({
  type: LOGIN_SUCCESS,
  payload: data,
});

export const loginFailed = (error: any): AnyAction => ({
  type: LOGIN_FAILED,
  payload: error,
});
