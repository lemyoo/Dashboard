import React from 'react'
import NavBar from '../components/NavBar'
import SideNavigation from '../components/SideNavigation'
//import DashBoard from '../components/DashBoard'


const MainView = () => {

    return (
        <div>
            < NavBar />
            <div style={{ margin: "1px 0px 0px 0px" }}>
                <div style={{
                    float: "left"
                }}>
                    < SideNavigation />
                </div>
                {/*<div style={{ float: "rigt" }}>
                    <DashBoard />
            </div>*/}
            </div>
        </div >

    )
}

export default MainView