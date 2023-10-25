import { AnyAction } from "redux";
import {
  UPDATE_USERS,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  UPDATE_FAVORITE,
} from "./actionsType";

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

export const loginSuccess = (newState: UsersState): AnyAction => ({
  type: LOGIN_SUCCESS,
  payload: newState,
});

export const loginFailed = (error: any): AnyAction => ({
  type: LOGIN_FAILED,
  payload: error,
});

export const updateFavorite = (newState: string[]): AnyAction => ({
  type: UPDATE_FAVORITE,
  newState: newState,
});
