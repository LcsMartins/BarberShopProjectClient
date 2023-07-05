import { useDispatch } from "react-redux";
import configureBarberShopStore from "../store";

export type PropType<TObj, TProp extends keyof TObj> = TObj[TProp];

type BarberShopStore = ReturnType<typeof configureBarberShopStore>;

export type BarberShopDispatch = PropType< BarberShopStore, "dispatch">
export const useBarberShopDispatch = () => useDispatch<BarberShopDispatch>()

export type BarberShopState = ReturnType<PropType<BarberShopStore, 'getState'>>
