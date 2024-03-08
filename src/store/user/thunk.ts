import { api } from "../../services/api/index";
import { AnyAction, Dispatch, Action } from "redux";
import {
  updateUsers,
  loginFailed,
  loginSuccess,
  updateFavorite,
} from "./actions";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { RootState, AppDispatch } from "../store";

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

interface IFavorite {
  favorite: string[];
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
      const response = await api.post("/user/authenticate", {
        email: userData.email,
        password: userData.password,
      });
      users = {
        loggedUser: {
          user: response.data,
        },
        isLogged: true,
      };
      dispatch(loginSuccess(users));
      return response.data;

    } catch (error) {
      console.log(error, "error ao fazer a requisição");
      let users = {
        loggedUser: {
          user: {
            name: "",
            nickname: "",
          },
        },
        isLogged: false,
      };
      /* dispatch(loginFailed(users)) */;
      throw error;
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

      dispatch(loginSuccess(response));
    } catch (error) {
      console.error(error);
    }
  };
};

export const updateFavoriteThunk = (
  digimonId: string,
  authToken: string
): ThunkAction<Promise<void>, RootState, unknown, AnyAction> => {
  return async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>,
    getState: () => any
  ) => {
    try {
      const headers = {
        "Content-Type": "application/json",
        "x-access-token": authToken,
      };

      const response = await api
        .patch(
          "/user/favorite",
          {
            digimonId: digimonId,
          },
          { headers: headers } // Passa o objeto de configuração com os cabeçalhos
        )
        .then((res) => {
          return res.data;
        })
        .catch((error) => {
          console.log(error, "error ao fazer a requisição");
          return error;
        });

      dispatch(updateFavorite(response.favorite));
      return Promise.resolve(); // Retorne uma promise vazia para cumprir o tipo de retorno Promise<void>
    } catch (error) {
      console.error(error);
      /* dispatch(loginFailed(error)); */
      return Promise.reject(error); // Retorne uma promise rejeitada em caso de erro
    }
  };
};

/* setRegisterSuccess: (success: boolean) => void,
  setRegisterFailed: (failed: boolean) => void */

 /*  
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
            dispatch(loginSuccess(users))
            return res.data;
          })
          .catch((error) => {
            console.log(error, "error ao fazer a requisição");
            console.log('aqui ????')
            users = {
              loggedUser: {
                user:{
                  name: '',
                  nickname: '',
                },
              },
              isLogged: false,
            }
            dispatch(loginFailed(users));
            return error;
          });
      } catch (error) {
        console.error(error);
      }
    };
  };
   */