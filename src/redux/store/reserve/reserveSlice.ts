import { PayloadAction, bindActionCreators, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { useBarberShopDispatch } from '../../hooks';
import { useMemo } from 'react';
import { getReserves } from '../../routes';
import CancelablePromise from 'cancelable-promise';
import { Reserves } from '../../../pages/Home/types';
import { bindAsyncThunk } from '../../sliceUtils';
type ApiStatus = 'init' | 'fetching' | 'success' | 'error' | 'aborted' ;

interface Reserve {
    id: string,
    dateTime: string,
    customerId: string ,
    barberId: string
}

export interface ReservesState {
    reserves:{
        apiStatus: ApiStatus,
        value: Reserve[]
    } 
}
const initialState: ReservesState = {
    reserves: {
        apiStatus: 'init',
        value: []
    }
}
  
const getReservesThunk = createAsyncThunk('reserves',
    async (
        getReserves: () => CancelablePromise<Reserves[]>,
        { signal } 
    ) => {
        const request = getReserves().then((reserves) => {
        if(!reserves){
            console.error('erro !reserves');
            throw new Error('erro !reserves');
        }
        console.log("aqqq",request);
        return reserves;
        });

        return request;
})


export const reservesSlice = createSlice({
    name: "reserves",
    initialState,
    reducers: {
        clearReserves(state){
            state.reserves.apiStatus = 'init';
            state.reserves.value = [];
        }
        
    },
    extraReducers: (builder) => {
        builder.addCase(getReservesThunk.pending, (state) => {
            state.reserves.apiStatus = 'fetching';
            state.reserves.value = [];
        });
        builder.addCase(getReservesThunk.fulfilled, (state, action) => {
            state.reserves.apiStatus = 'success';
            state.reserves.value = action.payload || [];
        });
        builder.addCase(getReservesThunk.rejected, (state) => {
            state.reserves.apiStatus = 'error';
            state.reserves.value = [];
        });
    }
});
//state.reserves.value = action.payload.data || [];

export function useReservesActions(){
    const dispatch = useBarberShopDispatch();
    return useMemo(( ) => {
         return {...bindActionCreators(reservesSlice.actions, dispatch), getReserves: bindAsyncThunk(getReservesThunk, getReserves, dispatch) } }, [dispatch] )
}


// receivedReserves(state, action: PayloadAction<ReserveState[]>){
        //     const reserves = action.payload;
        //     reserves.forEach(reserve => {
        //         state.reserves.append(reserve);
        //     })
        // }