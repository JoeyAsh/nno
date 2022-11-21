import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const SUMMONER_API_URL = '/summoner/v4/summoners';

export const riotApi = createApi({
    reducerPath: 'riotApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://euw1.api.riotgames.com/lol/',
        prepareHeaders: (headers) => {
            headers.set('X-Riot-Token', import.meta.env.RIOT_API_KEY);
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getByName: builder.query<string, string>({
            query: (name) => `${SUMMONER_API_URL}/by-name/${name}`,
        }),
    }),
});
