import React from "react";
import classes from "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NaviationItems from "../NavigationItems/NavigationItems";

const toolbar = props => (
    <header className={classes.Toolbar}>
        <div>MENU</div>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NaviationItems />
        </nav>
    </header>
);

export default toolbar;
