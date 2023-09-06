import { AnyAction, Reducer } from "redux";
import { UPDATE_USERS, LOGIN_FAILED, LOGIN_SUCCESS } from "./actionsType";

interface LoggedUser {
  user: {
    name: string;
    nickname: string;
    email: string;
    id: string;
    password: string;
    token: string;
  };
}

interface UsersState {
  loggedUser: LoggedUser;
  isLogged: boolean;
}

interface UpdateUsersAction {
  type: typeof UPDATE_USERS | typeof LOGIN_FAILED | typeof LOGIN_SUCCESS;
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
      console.log(action.newState);
      return action.newState;
    case LOGIN_FAILED:
      return action.newState;
    case LOGIN_SUCCESS:
      return action.newState;
    default:
      return state;
  }
};

export default UsersReducer;
