import { AnyAction, Reducer } from "redux";
import { FILTER_DIGIMON, SET_ALL_DIGIMON, RESET_FILTERS } from "./actionsType";
import {
  IDigimonData,
  IDigimonReducer,
} from "../../utils/interfaces/digimons/index";

interface UpdateWikipediaAction {
  type: typeof FILTER_DIGIMON | typeof SET_ALL_DIGIMON;
  newState: IDigimonData[];
}

const initialState: IDigimonReducer = {
  digimonsFilters: [
    { name: "", xAntibody: false, levels: [], attributes: [], fields: [] },
  ],
};

let initialSetAllDigimonState: IDigimonReducer | null = null;

const WikipediaReducer: Reducer<IDigimonReducer, UpdateWikipediaAction> = (
  state = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case FILTER_DIGIMON:
      return action.newState;
    case SET_ALL_DIGIMON:
      return action.newState;
    case RESET_FILTERS:
      if (initialSetAllDigimonState !== null) {
        // Se o estado inicial estiver disponível, redefina para ele
        return { ...initialSetAllDigimonState };
      }
      return state;
    default:
      return state;
  }
};

export default WikipediaReducer;
