import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const coinsApiHeaders = {
    "X-RapidAPI-Host": process.env.REACT_APP_COINS_HOST, 
    "X-RapidAPI-Key": process.env.REACT_APP_KEY 
};

const baseUrl = process.env.REACT_APP_COINS_BASEURL 

const createRequest = (url) => ({ url, headers: coinsApiHeaders });

export const coinsApi = createApi({
    reducerPath: 'coinsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCoins: builder.query({
            query: (count) => createRequest(`/coins/markets?vs_currency=usd&page=1&per_page=${count}&order=market_cap_desc`)
        }),
        getCoinsDetails: builder.query({
            query: (id) => createRequest(`/coins/${id}`)
        }),
        getCoinsHistory: builder.query({
            query: ({id, timeperiod}) => createRequest(`/coins/${id}/market_chart?vs_currency=usd&days=${timeperiod}`)
        }),
        getCoinsGlobal: builder.query({
            query: () => createRequest('/global')
        }),
    })
});

export const {
    useGetCoinsQuery,
    useGetCoinsDetailsQuery,
    useGetCoinsHistoryQuery,
    useGetCoinsGlobalQuery
} = coinsApi;
