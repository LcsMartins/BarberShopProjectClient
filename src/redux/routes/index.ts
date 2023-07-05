import { Reserves } from '../../pages/Home/types';
import { id } from '../../services/api';
import { CancelablePromise } from 'cancelable-promise';
import { getAsyncRequest } from '../sliceUtils';
import { ApiResponse } from '../sliceUtils';

export type ApiCall<

  T,

  K extends (...args: any) => CancelablePromise<T>,

> = () => K;

export const getReserves: ()=> CancelablePromise<ApiResponse<Reserves[] | undefined>> = ()=> {
  console.log(`entrou no getReserves das rotas`);  
  return getAsyncRequest<Reserves[]>(`appointments/${id}?flag=1`)

}


  
