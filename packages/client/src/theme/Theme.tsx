import {createTheme, CssBaseline, ThemeProvider} from '@mui/material';
import {ReactNode, useMemo} from 'react';
import {useTheme} from '../hooks/ThemeHooks';
import {typography} from './Typography';
import {components} from './Components';

export const Theme = ({children}: {children: ReactNode}): JSX.Element => {
    const {palette} = useTheme();

    const theme = useMemo(
        () =>
            createTheme({
                typography,
                components,
                palette,
            }),
        [palette],
    );

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};
