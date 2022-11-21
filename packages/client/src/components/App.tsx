import {Box, Container, Toolbar} from '@mui/material';
import {riotApi} from '../apis/riotApi';
import {AppBar} from './AppBar';
import {Routes} from './Routes';

export const App = (): JSX.Element => {
    const query = riotApi.useGetByNameQuery('agurin');
    console.log(query);
    return (
        <Box sx={{display: 'flex'}}>
            <AppBar />
            <Container sx={{flexGrow: 1, p: 3}}>
                <Toolbar />
                <Routes />
            </Container>
        </Box>
    );
};
