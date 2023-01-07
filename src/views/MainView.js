import React from 'react'
import NavBar from '../components/NavBar'
import SideNavigation from '../components/SideNavigation'
import { Grid } from '@mui/material'
import { useSelector } from 'react-redux'

const MainView = () => {
    const { show_side_menu } = useSelector(state => state.app)
    console.log(show_side_menu)
    return (
        <Grid container>
            <Grid item xs={12}>
                < NavBar />
            </Grid>
            <Grid item >
                < SideNavigation />
            </Grid>
        </Grid>

    )
}

export default MainView