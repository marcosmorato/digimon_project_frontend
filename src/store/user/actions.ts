import { AnyAction } from "redux";
import {
  UPDATE_USERS,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  UPDATE_FAVORITE,
  RESET_USERS
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
  newState: newState,
});

export const loginFailed = (newState: UsersState): AnyAction => ({
  type: LOGIN_FAILED,
  newState: newState,
});

export const updateFavorite = (newState: string[]): AnyAction => ({
  type: UPDATE_FAVORITE,
  newState: newState,
});

export const resetUsers = (): AnyAction => ({
  type: RESET_USERS,
});