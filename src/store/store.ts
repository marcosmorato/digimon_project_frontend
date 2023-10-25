import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counter/reducers"; // Importe seus reducers aqui
import UsersReducer from "./user/reducers";
import WikipediaReducer from "./wikipedia/reducers";

const rootReducer = combineReducers({
  user: UsersReducer,
  wikipedia: WikipediaReducer,
  // Adicione outros reducers, se houver
});

const store = configureStore({
  reducer: rootReducer,
  // Outras configurações da store, se necessário
});

export { store };

export type AppDispatch = typeof store.dispatch;
// Defina o tipo RootState
export type RootState = ReturnType<typeof store.getState>;
