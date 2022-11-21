import {PaletteMode} from '@mui/material';
import {createSlice} from '@reduxjs/toolkit';
import type {RootState} from '../../models/StoreModels';

let mode: PaletteMode;
const COLOR_MODE_KEY = 'COLOR_MODE';
let savedMode = localStorage.getItem(COLOR_MODE_KEY) as PaletteMode;
if (!savedMode) {
    localStorage.setItem(
        COLOR_MODE_KEY,
        window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light',
    );
    savedMode = localStorage.getItem(COLOR_MODE_KEY) as PaletteMode;
}

if (savedMode === 'dark') {
    mode = 'dark';
} else {
    mode = 'light';
}

const initialState = {
    colorMode: mode,
};

export const themeSlice = createSlice({
    name: 'Theme',
    initialState,
    reducers: {
        toggleColorMode(state) {
            state.colorMode = state.colorMode === 'light' ? 'dark' : 'light';
        },
    },
});

export const selectTheme = (state: RootState) => state.theme;
