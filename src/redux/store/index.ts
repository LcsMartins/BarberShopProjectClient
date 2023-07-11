import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../rootReducer";

export default function configureBarberShopStore(initialState: any) {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
  });
  return store;
}
