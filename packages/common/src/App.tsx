import {Box, Container, Stack, Typography} from '@mui/material';
import {TestButton} from './lib';

function App() {
    return (
        <Container>
            <Stack spacing={2}>
                <Typography variant={'h4'}>@joeyash-monorepo/common</Typography>
                <Box>
                    <TestButton />
                </Box>
            </Stack>
        </Container>
    );
}

export default App;
