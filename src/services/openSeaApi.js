import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const openSeaApiHeaders = {
    'X-RapidAPI-Host': process.env.REACT_APP_OPENSEAAPI_HOST, 
    'X-RapidAPI-Key': process.env.REACT_APP_KEY 
};

const baseUrl = process.env.REACT_APP_OPENSEAAPI_BASEURL 

const createRequest = (url) => ({ url, headers: openSeaApiHeaders });

export const openSeaApi = createApi({
    reducerPath: 'openSeaApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getNft: builder.query({
            query: () => createRequest("/assets?limit=50")
        }),
        getNftCollections: builder.query({
            query: ({address, token_id}) => createRequest(`asset/${address}/${token_id}`)
        }),
        getBundles: builder.query({
            query: () => createRequest('/bundles?limit=50&offset=0')
        })
    })
});

export const {
    useGetNftQuery,
    useGetNftCollectionsQuery,
    useGetBundlesQuery
} = openSeaApi;




