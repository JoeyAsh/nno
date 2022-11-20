import {PaletteOptions} from '@mui/material';

export const darkPalette: PaletteOptions = {
    mode: 'light',
    text: {
        primary: '#FFFFFF',
        secondary: 'rgba(255,255,255,0.7)',
        disabled: 'rgba(255,255,255,0.5)',
    },
    primary: {
        main: '#E03E1A',
        contrastText: '#FFFFFF',
    },
    secondary: {
        main: '#00B39A',
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
    divider: 'rgba(255,255,255,0.12)',
    background: {
        default: '#1F1F1F',
        paper: '#424242',
    },
};
