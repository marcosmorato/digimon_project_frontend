import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counter/reducers";
import UsersReducer from "./user/reducers";
import WikipediaReducer from "./wikipedia/reducers";

const rootReducer = combineReducers({
  user: UsersReducer,
  wikipedia: WikipediaReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export { store };

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
