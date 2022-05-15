import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoExchangesApiHeaders = {
    'X-RapidAPI-Host': process.env.REACT_APP_CRYPTOEXCHANGESAPI_HOST, 
    'X-RapidAPI-Key': process.env.REACT_APP_KEY 
};

const baseUrl = process.env.REACT_APP_CRYPTOEXCHANGESAPI_BASEURL 

const createRequest = (url) => ({ url, headers: cryptoExchangesApiHeaders });

export const cryptoExchangesApi = createApi({
    reducerPath: 'cryptoExchangesApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getExchanges: builder.query({
            query: () => createRequest('/gettopcoinsbymentions')
        }),
        getTopByFollowers: builder.query({
            query: () => createRequest('/gettopcoinsbyfollowers')
        }),
        getTopBySentiment: builder.query({
            query: () => createRequest('/gettopcoinsbysentiment')
        }),
    })
});

export const {
    useGetExchangesQuery,
    useGetTopByFollowersQuery,
    useGetTopBySentimentQuery
} = cryptoExchangesApi;


  
  