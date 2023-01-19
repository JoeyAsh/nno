import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const SUMMONER_API_URL = '/summoner/v4/summoners';

export const riotApi = createApi({
    reducerPath: 'riotApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://euw1.api.riotgames.com/lol/',
        prepareHeaders: (headers) => {
            headers.set(
                'X-Riot-Token',
                'RGAPI-46f1d6dd-0bbd-4ae6-8f2d-f6f2f14f27d7',
            );
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getByName: builder.query<string, string>({
            query: (name) => `${SUMMONER_API_URL}/by-name/${name}`,
        }),
    }),
});
