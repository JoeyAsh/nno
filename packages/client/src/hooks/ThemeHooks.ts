import {useMemo} from 'react';
import {useAppDispatch, useAppSelector} from './StoreHooks';
import {selectTheme, themeSlice} from '../store/slices/ThemeSlice';
import {darkPalette} from '../theme/DarkPalette';
import {lightPalette} from '../theme/LightPalette';

export const useTheme = () => {
    const dispatch = useAppDispatch();
    const colorMode = useAppSelector(selectTheme).colorMode;
    const palette = useMemo(
        () => (colorMode === 'dark' ? darkPalette : lightPalette),
        [colorMode],
    );

    const toggleColorMode = () => {
        dispatch(themeSlice.actions.toggleColorMode());
    };

    return {
        colorMode,
        palette,
        toggleColorMode,
    };
};
