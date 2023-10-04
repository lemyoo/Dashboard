import React from "react";
import NavBar from "../components/NavBar";
import SideNavigation from "../components/SideNavigation";
import { Outlet } from "react-router-dom";
import { Grid } from "@mui/material";

const MainView = () => {
  return (
    <div>
      <NavBar />
      <Grid container>
        <Grid item>
          <SideNavigation />
        </Grid>
        <Grid item>
          <div id="detail">
            <Outlet />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default MainView;
