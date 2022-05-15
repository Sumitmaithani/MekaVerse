import { configureStore } from "@reduxjs/toolkit";
import { cryptoNewsApi } from "../services/cryptoNewsApi";
import { cryptoExchangesApi } from '../services/cryptoExchangesApi';
import { openSeaApi } from "../services/openSeaApi";
import { twitterApi } from '../services/twitterApi';
import { coinsApi } from "../services/coins";

export default configureStore({
    reducer: {
        [coinsApi.reducerPath]: coinsApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
        [cryptoExchangesApi.reducerPath]: cryptoExchangesApi.reducer,
        [openSeaApi.reducerPath]: openSeaApi.reducer,
        [twitterApi.reducerPath]: twitterApi.reducer,
    },
})