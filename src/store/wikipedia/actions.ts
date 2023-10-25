import { AnyAction } from "redux";
import { FILTER_DIGIMON, SET_ALL_DIGIMON, RESET_FILTERS } from "./actionsType";
import { IDigimonReducer } from "../../utils/interfaces/digimons/index";

export const filterDigimons = (newState: IDigimonReducer): AnyAction => ({
  type: FILTER_DIGIMON,
  newState: newState,
});

export const wikipediaSetAllDigimons = (
  newState: IDigimonReducer
): AnyAction => ({
  type: SET_ALL_DIGIMON,
  newState: newState,
});

export const handleResetFilters = () => ({ type: RESET_FILTERS });
