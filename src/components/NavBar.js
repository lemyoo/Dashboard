import React from 'react'
import { Grid, Paper, Typography, Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import AppsIcon from '@mui/icons-material/Apps'
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const ItemMenu = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    padding: "6px 0"
}));
const ItemIcons = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    height: "52px",
}));
const ItemLeft = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
    padding: "6px 0",

}));
const NavBar = () => {
    return (
        <Grid container component={Paper}>
            <Grid item xs={3} md={1}>
                <ItemMenu>
                    <MenuIcon fontSize='large' />
                </ItemMenu>
            </Grid>
            <Grid item display={{ xs: 'none', md: 'block' }} md={2}>
                <ItemLeft>
                    <Typography fontWeight="bold" fontSize={26.5} >DZORKA</Typography>
                </ItemLeft>
            </Grid>
            <Grid item xs={9} md={9} >
                <ItemIcons>
                    <Grid container direction="row"
                        justifyContent="flex-end"
                        alignItems="center">
                        <Grid item sx={1}>
                            <ItemMenu>
                                <SearchIcon fontSize='large' />
                            </ItemMenu>
                        </Grid>
                        <Grid item sx={1}>
                            <ItemMenu>
                                <AppsIcon fontSize='large' />
                            </ItemMenu>
                        </Grid>
                        <Grid item sx={1}>
                            <ItemMenu>
                                <NotificationsIcon fontSize='large' />
                            </ItemMenu>
                        </Grid>
                        <Grid item >
                            <ItemMenu>
                                <Stack direction="row" >
                                    <Avatar alt='user' src='https://media.licdn.com/dms/image/D4D03AQFeiJPl12lywQ/profile-displayphoto-shrink_200_200/0/1663241490112?e=1678320000&v=beta&t=Rw8qW_DFeC_2XIw8dQOQZEy04gKkj4A3ibcAIQskRnw' />
                                    <Typography textAlign="center" padding="7px 0">username@account.com</Typography>
                                </Stack>
                            </ItemMenu>
                        </Grid>
                    </Grid>
                </ItemIcons>
            </Grid>
        </Grid>
    )
}

export default NavBar