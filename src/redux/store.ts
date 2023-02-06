import { configureStore } from "@reduxjs/toolkit";
import { serverApi } from './backend/api';


export const store = configureStore(
    {
        reducer:{
            [serverApi.reducerPath]: serverApi.reducer
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(serverApi.middleware)
    }
)