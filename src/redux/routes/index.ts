import { Reserves } from '../../pages/Home/types';
import { api, token, id } from '../../services/api';
import { CancelablePromise } from 'cancelable-promise';


export type ApiCall<

  T,

  K extends (...args: any) => CancelablePromise<T>,

> = () => K;


export const  getReserves: ApiCall<Reserves[], ()=>CancelablePromise<Reserves[]>> = ()=> {
        const headers = {
            authorization: `Bearer ${token}`,
        };
        //flag: 0 barber and 1 customer
        const response =  fetch(`${api}appointments/${id}?flag=1`, {headers,})   
               .then(response => response.json())


        console.log("respo: ", response);

        return response
}


  
