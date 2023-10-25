import { AnyAction, Reducer } from "redux";
import {
  UPDATE_USERS,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  UPDATE_FAVORITE,
} from "./actionsType";

interface LoggedUser {
  user: {
    name: string;
    nickname: string;
    email: string;
    id: string;
    password: string;
    token: string;
    favorite: string[] | [];
  };
}

interface UsersState {
  loggedUser: LoggedUser;
  isLogged: boolean;
}

interface UpdateUsersAction {
  type:
    | typeof UPDATE_USERS
    | typeof LOGIN_FAILED
    | typeof LOGIN_SUCCESS
    | typeof UPDATE_FAVORITE;
  newState: UsersState;
}

const initialState: UsersState = {
  loggedUser: {
    user: {
      token: "",
      name: "",
      nickname: "",
      password: "",
      email: "",
      id: "",
      favorite: [],
    },
  },
  isLogged: false,
};

const UsersReducer: Reducer<UsersState, UpdateUsersAction> = (
  state = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case UPDATE_USERS:
      return { ...state, ...action.newState };
    case LOGIN_FAILED:
      return { ...state, ...action.newState };
    case LOGIN_SUCCESS:
      return { ...state, ...action.newState };
    case UPDATE_FAVORITE:
      const updatedFavoriteState: UsersState = {
        ...state,
        loggedUser: {
          ...state.loggedUser,
          user: {
            ...state.loggedUser.user,
            favorite: action.newState,
          },
        },
      };
      return updatedFavoriteState;
    default:
      return state;
  }
};

export default UsersReducer;
