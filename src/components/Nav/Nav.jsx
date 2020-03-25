import React from 'react';
import classes from './Nav.module.css';
import {NavLink} from "react-router-dom";
import UserOnlineContainer from "./UserOnline/UserOnlineContainer";

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile" activeClassName={classes.active}> Profile </NavLink>
            </div>
            <div>
                <NavLink to="/dialogs" activeClassName={classes.active}> Messages </NavLink>
            </div>
            <div>
                <NavLink to="/news" activeClassName={classes.active}> News </NavLink>
            </div>
            <div>
                <NavLink to="/music" activeClassName={classes.active}> Music </NavLink>
            </div>
            <div>
                <NavLink to="/games" activeClassName={classes.active}> Games </NavLink>
            </div>
            <div>
                <NavLink to="/users" activeClassName={classes.active}> Users </NavLink>
            </div>
            <div>
                <NavLink to="/followed" activeClassName={classes.active}> Followed </NavLink>
            </div>
            <div className={classes.settings}>
                <NavLink to="/settings" activeClassName={classes.active}> Settings </NavLink>
            </div>
<UserOnlineContainer/>
        </nav>
    );
}

export default Nav;
