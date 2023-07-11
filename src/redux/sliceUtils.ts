import { AsyncThunk } from "@reduxjs/toolkit";
import { CancelablePromise, cancelable } from "cancelable-promise";
import { BarberShopDispatch } from "./hooks";
import { Reserves } from "../pages/Home/types";
import { api, token, id } from "../services/api";

export type ApiResponse<T> = { status: number; data: T | undefined };

export interface AsyncTaskResponse<ResBody = any, ReqBody = any> {
  method: "GET" | "POST" | "PUT" | "DELETE";

  requestBody: ReqBody | null;

  requestTime: string;

  url: string;

  responseBody?: ResBody;

  responseStatus?: number;

  responseTime?: string;
}

export function bindAsyncThunk<
  ResultType,
  ApiCallbackReturn,
  ApiCallback extends (
    ...args: any
  ) => CancelablePromise<ApiResponse<ApiCallbackReturn | undefined>>
>(
  thunk: AsyncThunk<
    ResultType,
    () => CancelablePromise<ApiResponse<ApiCallbackReturn | undefined>>,
    any
  >,

  apiCallback: ApiCallback,

  dispatch: BarberShopDispatch
) {
  return (...args: Parameters<ApiCallback>) =>
    dispatch(thunk(() => apiCallback(...args)));
}

export function getAsyncRequest<T>(
  url: string,
  requestInit?: RequestInit
): CancelablePromise<
  ApiResponse<AsyncTaskResponse<T>[`responseBody`] | undefined>
> {
  const headers = {
    authorization: `Bearer ${token}`,
  };
  //flag: 0 barber and 1 customer
  const response = cancelable(
    fetch(`${api}${url}`, { headers }).then((response) => {
      return response.json();
    })
  );
  return response;
}
