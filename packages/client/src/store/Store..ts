import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import {riotApi} from '../apis/riotApi';
import {themeSlice} from './slices/ThemeSlice';

export const store = configureStore({
    reducer: {
        theme: themeSlice.reducer,
        [riotApi.reducerPath]: riotApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(riotApi.middleware),
});

setupListeners(store.dispatch);
