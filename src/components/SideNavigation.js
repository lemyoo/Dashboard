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
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import StoreIcon from '@mui/icons-material/Store';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import Grid3x3OutlinedIcon from '@mui/icons-material/Grid3x3Outlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import { Divider } from '@mui/material';
import { useSelector } from 'react-redux'

const SideNavigation = () => {
    const { show_side_menu } = useSelector(state => state.app)

    const [openEmail, setOpenEmail] = React.useState(false);
    const [openPOS, setOpenPOS] = React.useState(false);
    const [openUIKits, setOpenUIKits] = React.useState(false);
    const [openForms, setOpenForms] = React.useState(false);
    const [openTables, setOpenTables] = React.useState(false);
    const [openCharts, setOpenCharts] = React.useState(false);
    const [openLayout, setOpenLayout] = React.useState(false);
    const [openPages, setOpenPages] = React.useState(false);

    const handleClickOpenEmail = () => {
        setOpenEmail(!openEmail);
    };
    const handleClickPOS = () => {
        setOpenPOS(!openPOS)
    }
    const handleClickUIKits = () => {
        setOpenUIKits(!openUIKits)
    }
    const handleClickOpenForms = () => {
        setOpenForms(!openForms);
    };
    const handleClickOpenTables = () => {
        setOpenTables(!openTables)
    }
    const handleClickOpenCharts = () => {
        setOpenCharts(!openCharts)
    }
    const handleClickOpenLayout = () => {
        setOpenLayout(!openLayout);
    };
    const handleClickOpenPages = () => {
        setOpenPages(!openPages)
    }

    return (
        <span id="sideNavigationMenus"
            style={{
                display: show_side_menu ? "block" : "none",
                position: "sticky",
                height: "95vh",
                overflowY: "scroll",
                overflowX: "hidden"

            }}>
            <div style={{ width: 300 }}>
                <List
                    sx={{ width: '100%', maxWidth: 300, bgcolor: 'background.paper' }}
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
                    <ListItemButton onClick={handleClickOpenEmail}>
                        <ListItemIcon>
                            <MailOutlineIcon />
                        </ListItemIcon>
                        <ListItemText primary="Email" />
                        {openEmail ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={openEmail} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 9 }}>
                                <ListItemText primary="Inbox" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 9 }}>
                                <ListItemText primary="Compose" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 9 }}>
                                <ListItemText primary="Detail" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                </List>
                <Divider />
                <List
                    sx={{ width: '100%', maxWidth: 300, bgcolor: 'background.paper' }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            Components
                        </ListSubheader>
                    }
                >
                    <ListItemButton>
                        <ListItemIcon>
                            <DashboardOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Widgets" />
                    </ListItemButton>
                    <ListItemButton onClick={handleClickPOS}>
                        <ListItemIcon>
                            <StoreIcon />
                        </ListItemIcon>
                        <ListItemText primary="POS System" />
                        {openPOS ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={openPOS} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 9 }}>
                                <ListItemText primary="Customer Order" />
                            </ListItemButton>
                        </List>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 9 }}>
                                <ListItemText primary="Kicthen Order" />
                            </ListItemButton>
                        </List>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 9 }}>
                                <ListItemText primary="Counter Checkout" />
                            </ListItemButton>
                        </List>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 9 }}>
                                <ListItemText primary="Table Booking" />
                            </ListItemButton>
                        </List>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 9 }}>
                                <ListItemText primary="Menu Stock" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                    <ListItemButton onClick={handleClickUIKits}>
                        <ListItemIcon>
                            <SportsEsportsOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="UI Kits" />
                        {openUIKits ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={openUIKits} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 9 }}>
                                <ListItemText primary="Bootstrap" />
                            </ListItemButton>
                        </List>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 9 }}>
                                <ListItemText primary="Buttons" />
                            </ListItemButton>
                        </List>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 9 }}>
                                <ListItemText primary="Card" />
                            </ListItemButton>
                        </List>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 9 }}>
                                <ListItemText primary="Modal & Notification" />
                            </ListItemButton>
                        </List>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 9 }}>
                                <ListItemText primary="Typography" />
                            </ListItemButton>
                        </List>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 9 }}>
                                <ListItemText primary="Tabs & Accordions" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                    <ListItemButton onClick={handleClickOpenForms}>
                        <ListItemIcon>
                            <CreateOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Forms" />
                        {openForms ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={openForms} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 9 }}>
                                <ListItemText primary="Form Elements" />
                            </ListItemButton>
                        </List>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 9 }}>
                                <ListItemText primary="Form Plugins" />
                            </ListItemButton>
                        </List>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 9 }}>
                                <ListItemText primary="Wizards" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                    <ListItemButton onClick={handleClickOpenTables}>
                        <ListItemIcon>
                            <TableChartOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Tables" />
                        {openTables ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={openTables} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 9 }}>
                                <ListItemText primary="Table Elements" />
                            </ListItemButton>
                        </List>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 9 }}>
                                <ListItemText primary="Table Plugins" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                    <ListItemButton onClick={handleClickOpenCharts}>
                        <ListItemIcon>
                            <PieChartOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Charts" />
                        {openCharts ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={openCharts} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 9 }}>
                                <ListItemText primary="Table Elements" />
                            </ListItemButton>
                        </List>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 9 }}>
                                <ListItemText primary="Table Plugins" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                    <ListItemButton>
                        <ListItemIcon>
                            <ExploreOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Map" />
                    </ListItemButton>
                    <ListItemButton onClick={handleClickOpenLayout}>
                        <ListItemIcon>
                            <Grid3x3OutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Layout" />
                        {openLayout ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={openLayout} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 9 }}>
                                <ListItemText primary="Starte Page" />
                            </ListItemButton>
                        </List>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 9 }}>
                                <ListItemText primary="Fixed Footer" />
                            </ListItemButton>
                        </List>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 9 }}>
                                <ListItemText primary="Full Height" />
                            </ListItemButton>
                        </List>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 9 }}>
                                <ListItemText primary="Full Width" />
                            </ListItemButton>
                        </List>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 9 }}>
                                <ListItemText primary="Boxed Layout" />
                            </ListItemButton>
                        </List>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 9 }}>
                                <ListItemText primary="Collapsed Sidebar" />
                            </ListItemButton>
                        </List>
                    </Collapse>

                    <ListItemButton onClick={handleClickOpenPages}>
                        <ListItemIcon>
                            <LayersOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Pages" />
                        {openPages ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={openPages} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 9 }}>
                                <ListItemText primary="Scrum Board" />
                            </ListItemButton>
                        </List>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 9 }}>
                                <ListItemText primary="Products" />
                            </ListItemButton>
                        </List>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 9 }}>
                                <ListItemText primary="Orders" />
                            </ListItemButton>
                        </List>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 9 }}>
                                <ListItemText primary="Order Details" />
                            </ListItemButton>
                        </List>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 9 }}>
                                <ListItemText primary="Gallery" />
                            </ListItemButton>
                        </List>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 9 }}>
                                <ListItemText primary="Search Results" />
                            </ListItemButton>
                        </List>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 9 }}>
                                <ListItemText primary="Coming Soon Page" />
                            </ListItemButton>
                        </List>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 9 }}>
                                <ListItemText primary="404 Error Page" />
                            </ListItemButton>
                        </List>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 9 }}>
                                <ListItemText primary="Login" />
                            </ListItemButton>
                        </List>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 9 }}>
                                <ListItemText primary="Register" />
                            </ListItemButton>
                        </List>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 9 }}>
                                <ListItemText primary="Messenger" />
                            </ListItemButton>
                        </List>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 9 }}>
                                <ListItemText primary="Data Manager" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                </List>
                <Divider />

                <List
                    sx={{ width: '100%', maxWidth: 300, bgcolor: 'background.paper' }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            Users
                        </ListSubheader>
                    }
                >
                    <ListItemButton>
                        <ListItemIcon>
                            <Person2OutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <CalendarMonthOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Calendar" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <SettingsSuggestOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <DiamondOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Helper" />
                    </ListItemButton>
                </List>

            </div>
        </span>
    );
}
export default SideNavigation