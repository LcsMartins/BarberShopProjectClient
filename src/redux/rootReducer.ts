import { combineReducers } from "@reduxjs/toolkit";
import { reservesSlice } from "./store/reserve/reserveSlice";

export const rootReducer = combineReducers({reserves: reservesSlice.reducer})