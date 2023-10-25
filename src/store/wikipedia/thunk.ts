import { api } from "../../services/api/index";
import { AnyAction, Dispatch, Action } from "redux";
import { filterDigimons, wikipediaSetAllDigimons } from "./actions";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { RootState, AppDispatch } from "../store";
import { AxiosResponse } from "axios";
import { SetStateAction } from "react";
import { IDigimonFilter } from "../../utils/interfaces/digimons";

interface IFilters {
  name: string;
}

const loginFailure = (error: any): AnyAction => ({
  type: "LOGIN_FAILURE",
  payload: error,
});

export const wikipediaThunk = (
  authToken: string,
  setStateFilter: (e: boolean) => void
): ThunkAction<Promise<void>, RootState, unknown, AnyAction> => {
  return async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>,
    getState: () => RootState
  ) => {
    try {
      const headers = {
        "Content-Type": "application/json",
        "x-access-token": authToken,
      };
      const response = await api
        .get(`/digimon/all`, {
          headers,
        })
        .then((res) => {
          setStateFilter(true);
          dispatch(wikipediaSetAllDigimons({ digimonsFilters: res.data }));
        })
        .catch((error) => {
          console.log(error, "error ao fazer a requisição");
          setStateFilter(false);
          return error;
        });
    } catch (error) {
      console.error(error);
      dispatch(loginFailure(error));
    }
  };
};

export const wikipediaFilterThunk = (
  filters: IFilters
): ThunkAction<Promise<void>, RootState, unknown, AnyAction> => {
  return async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>,
    getState: () => RootState
  ) => {
    const digimons = getState().wikipedia;
    const searchString = "Agumon";
    const filteredDigimons = digimons.digimonsFilters.filter((el) => {
      const lowerCaseName = el.name.toLowerCase();
      const loewCaseSearchString = filters.name.toLowerCase();
      return lowerCaseName.includes(loewCaseSearchString);
    });
    dispatch(filterDigimons({ digimonsFilters: filteredDigimons }));
  };
};

export const wikipediaModalThunk = async (
  name: string,
  authToken: string,
  setStateFilter: (e: boolean) => void,
  setDigimonInfo: React.Dispatch<React.SetStateAction<IDigimonFilter | null>>
): Promise<AxiosResponse> => {
  try {
    const headers = {
      "Content-Type": "application/json",
      "x-access-token": authToken,
    };

    const teste = name.replace(/[^\w\s()\-]/gi, "").replace(/ /g, "%20");

    const response = await api
      .get(`/digimon/filter?name=${teste}`, {
        headers,
      })
      .then((res: AxiosResponse<IDigimonFilter>) => {
        setDigimonInfo(res.data);
        setStateFilter(true);
        return res.data;
      })
      .catch((error) => {
        console.log(error, "error ao fazer a requisição");
        setStateFilter(false);
        return error;
      });
    return response.data; // Retornar apenas a parte de dados da resposta
  } catch (error) {
    console.error("Erro ao fazer a requisição:", error);
    throw error; // Você pode lidar com o erro no componente que chama essa função, se necessário.
  }
};
