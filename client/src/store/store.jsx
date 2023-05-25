import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { itemReducer } from "./slices/itemSlice";
import { typeReducer } from "./slices/typeSlice";
import { api } from "./operations";
import { cartReducer } from "./slices/cartSlice";

// persist
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "cart",
  storage,
};

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    items: itemReducer,
    types: typeReducer,
    cart: persistReducer(persistConfig, cartReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(api.middleware),
  serializableCheck: false,
});
export const persistor = persistStore(store);

setupListeners(store.dispatch);
