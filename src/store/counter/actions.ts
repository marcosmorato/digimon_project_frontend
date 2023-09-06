import { AnyAction } from "redux";

// Defina os tipos de ação
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

// Defina as funções de ação
export const increment = (): AnyAction => ({
  type: INCREMENT,
});

export const decrement = (): AnyAction => ({
  type: DECREMENT,
});
