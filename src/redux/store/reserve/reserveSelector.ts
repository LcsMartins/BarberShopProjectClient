import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { BarberShopState } from "../../hooks";

const selectSelf = (state: BarberShopState) => state.reserves
function select<T>(selector: (state: ReturnType<typeof selectSelf> ) => T){

    return createDraftSafeSelector(selectSelf, selector)
}

export const reservesSelector = select((state)=> state.reserves)