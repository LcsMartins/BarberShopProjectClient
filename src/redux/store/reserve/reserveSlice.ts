import { PayloadAction, bindActionCreators, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { useBarberShopDispatch } from '../../hooks';
import { useMemo } from 'react';
import { getReserves } from '../../routes';
import CancelablePromise from 'cancelable-promise';
import { Reserves } from '../../../pages/Home/types';
import { ApiResponse, bindAsyncThunk } from '../../sliceUtils';
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
        value: any
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
        getReserves: () => CancelablePromise<ApiResponse<Reserves[] | undefined>>,
        { signal } 
    ) => {
        console.log("entrou thunk;");
        const request = getReserves().then((reserves) => {
            console.log("entrou na request>(reserves:) ", reserves);
            if(!reserves){
                console.error('erro !reserves');
                throw new Error('erro !reserves');
            }
            return reserves;
        });
        signal.addEventListener('abort', () =>{
            request.cancel()
        } )
        console.log("request do thunk:",request);
        return request;
})


export const reservesSlice = createSlice({
    name: "reserves",
    initialState,
    reducers: {
        clearReserves(state){
            state.reserves.apiStatus = 'init';
            state.reserves.value = [];
            console.log(`clear`);
        }
        
    },
    extraReducers: (builder) => {
        builder.addCase(getReservesThunk.pending, (state) => {
            state.reserves.apiStatus = 'fetching';
            state.reserves.value = [];
            console.log(`fetching:`, state);
        });
        builder.addCase(getReservesThunk.fulfilled, (state, action) => {
            state.reserves.apiStatus = 'success';
            state.reserves.value = ['gabriel']|| [];
            console.log(`success:`, action);
            console.log(`state.reserves.value: ${state.reserves.value}`)
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