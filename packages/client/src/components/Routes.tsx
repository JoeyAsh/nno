import {Typography} from '@mui/material';
import {Route, Routes as RouterRoutes} from 'react-router-dom';

export const Routes = () => {
    return (
        <RouterRoutes>
            <Route path={'/'} element={<Typography>Home</Typography>} />
        </RouterRoutes>
    );
};
