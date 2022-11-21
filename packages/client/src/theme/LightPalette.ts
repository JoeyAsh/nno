import {PaletteOptions} from '@mui/material';

export const lightPalette: PaletteOptions = {
    mode: 'light',
    text: {
        primary: '#000000',
        secondary: 'rgba(0,0,0,0.7)',
        disabled: 'rgba(0,0,0,0.5)',
    },
    primary: {
        main: '#00000',
        contrastText: '#FFFFFF',
    },
    secondary: {
        main: '#E03E1A',
    },
    success: {
        main: '#66BB6A',
    },
    info: {
        main: '#29B6F6',
    },
    warning: {
        main: '#FFA726',
    },
    error: {
        main: '#F44336',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    background: {
        default: '#fafafa',
        paper: '#ffffff',
    },
};
