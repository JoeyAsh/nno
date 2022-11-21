import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import {
    AppBar as AppBarMUI,
    Box,
    IconButton,
    Toolbar,
    useTheme as useMuiTheme,
} from '@mui/material';
import {Logo} from '../assets/img/Images';
import {useTheme} from '../hooks/ThemeHooks';

export const AppBar = () => {
    const {colorMode, toggleColorMode} = useTheme();
    const theme = useMuiTheme();

    const handleColorModeButtonClick = () => {
        toggleColorMode();
    };

    return (
        <AppBarMUI
            variant={'elevation'}
            position={'fixed'}
            color={'inherit'}
            sx={{zIndex: theme.zIndex.drawer + 1}}
        >
            <Toolbar disableGutters sx={{px: 2}}>
                <Box sx={{width: 100, display: 'flex', alignItems: 'center'}}>
                    <Logo
                        width={'100%'}
                        height={'100%'}
                        fill={theme.palette.primary.main}
                    />
                </Box>
                <Box sx={{flexGrow: 1}} />
                <Box>
                    <IconButton
                        onClick={handleColorModeButtonClick}
                        color={'primary'}
                        aria-label={'Mode'}
                    >
                        {colorMode === 'light' ? (
                            <DarkModeIcon />
                        ) : (
                            <LightModeIcon />
                        )}
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBarMUI>
    );
};
