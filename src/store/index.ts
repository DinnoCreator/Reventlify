import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "./slices";
// import storage from "redux-persist/lib/storage";
import storageSession from "redux-persist/lib/storage/session";
// import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  version: 1,
  storage: storageSession,
  // storage,
};

const reducer = combineReducers({
  auth: authSlice.reducer,
  // posts: postsSlice.reducer,
});
const persistedReducer = persistReducer(persistConfig, reducer);

 const store = configureStore({
  reducer: persistedReducer,
  // middleware: () => [thunk],
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
export const persister = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
