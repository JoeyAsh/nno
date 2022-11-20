import {createTheme, CssBaseline, ThemeProvider} from '@mui/material';
import {ReactNode} from 'react';
import {components} from './Components';
import {typography} from './Typography';

const theme = createTheme({
    typography,
    components,
});

export const Theme = ({children}: {children: ReactNode}): JSX.Element => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};
