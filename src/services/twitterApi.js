import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const twitterApiHeaders = {
    'X-RapidAPI-Host': process.env.REACT_APP_TWITTERAPI_HOST, 
    'X-RapidAPI-Key': process.env.REACT_APP_KEY 
  };
  
  const baseUrl = process.env.REACT_APP_TWITTERAPI_BASEURL 
  
  const createRequest = (url) => ({ url, headers: twitterApiHeaders });
  
  export const twitterApi = createApi({
      reducerPath: 'cryptoApi',
      baseQuery: fetchBaseQuery({ baseUrl }),
      endpoints: (builder) => ({
          getTwitter: builder.query({
              query: (search="Cryptocurrencies") => createRequest(`/Search/?q=${search}&count=50`)
          }),
          getTwitterDetails: builder.query({
            query: (id) => createRequest(`/coins/${id}`)
        }),
      })
  });
  
  export const {
      useGetTwitterQuery,
      useGetTwitterDetailsQuery,
  } = twitterApi;


