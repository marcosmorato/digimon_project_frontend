import { api } from "../../services/api/index";
import { AnyAction } from "redux";
import { filterDigimons, wikipediaSetAllDigimons } from "./actions";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { RootState } from "../store";
import { AxiosResponse } from "axios";
import { IDigimonFilter } from "../../utils/interfaces/digimons";

interface IFilters {
  name: string;
}

export const wikipediaThunk = (
  authToken: string,
  setShowWikipedia: (e: boolean) => void
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
      await api
        .get(`/digimon/all`, {
          headers,
        })
        .then((res) => {
          setShowWikipedia(true);
          dispatch(wikipediaSetAllDigimons({ digimonsFilters: res.data }));
        })
        .catch((error) => {
          throw error;
        });
    } catch (error) {
      console.error(error);
      throw error;
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

    const digimonName = name.replace(/[^\w\s()-]/gi, "").replace(/ /g, "%20");

    const response = await api
      .get(`/digimon/filter?name=${digimonName}`, {
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
    return response.data;
  } catch (error) {
    console.error("Erro ao fazer a requisição:", error);
    throw error;
  }
};
