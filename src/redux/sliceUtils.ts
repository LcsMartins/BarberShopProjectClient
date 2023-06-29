
import { AsyncThunk } from '@reduxjs/toolkit';
import { CancelablePromise } from 'cancelable-promise';
import { BarberShopDispatch } from './hooks';

export function bindAsyncThunk<
  ResultType,
  ApiCallbackReturn,
  ApiCallback extends (...args: any) => CancelablePromise<ApiCallbackReturn>
>(

  thunk: AsyncThunk<ResultType, () => CancelablePromise<ApiCallbackReturn>, any>,

  apiCallback: ApiCallback,

  dispatch: BarberShopDispatch

) {

  return (...args: Parameters<ApiCallback>) => dispatch(thunk(() => apiCallback(...args)));

}