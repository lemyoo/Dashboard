import React from 'react'
import { Grid, Paper, Typography, Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import AppsIcon from '@mui/icons-material/Apps'
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';

const ItemMenu = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    //padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const ItemIcons = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    color: theme.palette.text.secondary
}));
const ItemLeft = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));
const NavBar = () => {
    return (
        <Grid container
            component={Paper}
            style={{ height: "7vh" }}
            justifyContent="center"
            alignItems="center">
            <Grid item xs={3} md={1}>
                <ItemMenu>
                    <MenuIcon fontSize='medium' />
                </ItemMenu>
            </Grid>
            <Grid item display={{ xs: 'none', md: 'block' }} md={2}>
                <ItemLeft>
                    <Typography fontWeight="bold" fontSize={26.5} >DZORKA</Typography>
                </ItemLeft>
            </Grid>
            <Grid item xs={9} md={9} >
                <ItemIcons>
                    <Grid container spacing={2}
                        direction="row"
                        justifyContent="flex-end"
                        alignItems="center">
                        <Grid item sx={1}>
                            <ItemMenu>
                                <SearchIcon fontSize='medium' />
                            </ItemMenu>
                        </Grid>
                        <Grid item sx={1}>
                            <ItemMenu>
                                <AppsIcon fontSize='medium' />
                            </ItemMenu>
                        </Grid>
                        <Grid item sx={1}>
                            <ItemMenu>
                                <NotificationsIcon fontSize='medium' />
                            </ItemMenu>
                        </Grid>
                        <Grid item >
                            <ItemMenu>
                                <Grid container
                                >
                                    <Grid item xs={1}>
                                        <Avatar alt='user' sx={{ width: 30, height: 30 }} src='https://media.licdn.com/dms/image/D4D03AQFeiJPl12lywQ/profile-displayphoto-shrink_200_200/0/1663241490112?e=1678320000&v=beta&t=Rw8qW_DFeC_2XIw8dQOQZEy04gKkj4A3ibcAIQskRnw' />
                                    </Grid>
                                    <Grid item display={{ xs: "none", md: "block" }}>
                                        <Typography fontWeight="bold" paddingLeft="15px">username@account.com</Typography>
                                    </Grid>
                                </Grid>
                            </ItemMenu>
                        </Grid>
                    </Grid>
                </ItemIcons>
            </Grid>
        </Grid>
    )
}

export default NavBar