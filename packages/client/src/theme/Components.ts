import {Components} from '@mui/material';
import Montserrat from '../assets/fonts/Montserrat/Montserrat-VariableFont_wght.ttf';

export const components: Components = {
    MuiCssBaseline: {
        styleOverrides: `
        @font-face { 
          font-family: 'Montserrat'; 
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Montserrat'), local('Montserrat'), url(${Montserrat}) format('ttf'); 
        }
      `,
    },
};
