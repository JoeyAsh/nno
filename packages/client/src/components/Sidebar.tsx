import {
    Avatar as AvatarMui,
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    styled,
    Toolbar,
} from '@mui/material';
import {blue, green, purple, red, yellow} from '@mui/material/colors';

interface Player {
    name: string;
    color: string;
}

const Avatar = styled(AvatarMui)(() => ({
    width: 32,
    height: 32,
}));

const drawerWidth = 240;

const players: Array<Player> = [
    {name: 'Tolkin', color: red[500]},
    {name: 'Agurin', color: green[500]},
    {name: 'Noway', color: yellow[500]},
    {name: 'Broeki', color: purple[500]},
    {name: 'Karni', color: blue[500]},
];

export const Sidebar = () => {
    return (
        <Drawer
            variant={'permanent'}
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
        >
            <Toolbar />
            <Box sx={{overflow: 'auto'}}>
                <List>
                    {players.map(({name, color}) => (
                        <ListItem disablePadding key={name}>
                            <ListItemButton>{name}</ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
};
