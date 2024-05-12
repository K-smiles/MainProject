import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { IconButton } from '@mui/material';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Link } from "react-router-dom";

export default function NavDrawer({ open, updateOpen, routes }) {

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={() => updateOpen(false)}>
            <List>

                {routes.map((item) => (item.collapse ?
                    <Link to={item.prefix}>
                        <ListItem key={item.name} disablePadding>
                            <ListItemButton>
                                <ListItemIcon >
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.name} />
                            </ListItemButton>
                        </ListItem>
                        <Divider />
                    </Link>
                    :
                    <Link to={item.route}>
                        <ListItem key={item.name} disablePadding>
                            <ListItemButton>
                                <ListItemIcon >
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.name} />
                            </ListItemButton>
                        </ListItem>
                        <Divider />
                    </Link>
                ))}
            </List>

        </Box>
    );

    return (
        <div>
            <IconButton color="info" children={<MenuBookIcon />} onClick={() => updateOpen(true)} />
            <Drawer open={open} anchor="left" onClose={() => updateOpen(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}

