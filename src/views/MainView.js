import React from 'react'
import NavBar from '../components/NavBar'
import SideNavigation from '../components/SideNavigation'
import { Grid } from '@mui/material'

const MainView = () => {
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