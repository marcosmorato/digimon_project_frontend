// store.ts
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import counterReducer from "./counter/reducers"; // Importe seus reducers aqui
import UsersReducer from "./user/reducers";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  user: UsersReducer,
  // Adicione outros reducers, se houver
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  // Outras configurações da store, se necessário
});

const persistor = persistStore(store);

export { store, persistor };

export type AppDispatch = typeof store.dispatch;
// Defina o tipo RootState
export type RootState = ReturnType<typeof store.getState>;
