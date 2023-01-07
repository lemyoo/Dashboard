import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import MemoryIcon from '@mui/icons-material/Memory';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { Divider } from '@mui/material';

export default function SideNavigation() {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <div>
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Navigation
                    </ListSubheader>
                }
            >
                <ListItemButton>
                    <ListItemIcon>
                        <MemoryIcon />
                    </ListItemIcon>
                    <ListItemText primary="DashBoard" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <EqualizerIcon />
                    </ListItemIcon>
                    <ListItemText primary="Analytics" />
                </ListItemButton>
                <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                        <MailOutlineIcon />
                    </ListItemIcon>
                    <ListItemText primary="Email" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Starred" />
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>
            <Divider />
        </div>
    );
}