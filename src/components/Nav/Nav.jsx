import React from 'react';
import classes from './Nav.module.css';
import {NavLink} from "react-router-dom";
import UserOnlineContainer from "./UserOnline/UserOnlineContainer";
import profileIcon from "../../assets/img/profile.svg"
import messageIcon from "../../assets/img/message.svg"
import gamesIcon from "../../assets/img/games.svg"
import usersIcon from "../../assets/img/users.svg"
import settingsIcon from "../../assets/img/settings.svg"

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile" activeClassName={classes.active}> <img src={profileIcon} /> <span>Profile</span> </NavLink>
            </div>
            <div>
                <NavLink to="/dialogs" activeClassName={classes.active}> <img src={messageIcon} /> <span>Messages</span> </NavLink>
            </div>
            {/*<div>*/}
            {/*    <NavLink to="/news" activeClassName={classes.active}> News </NavLink>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <NavLink to="/music" activeClassName={classes.active}> Music </NavLink>*/}
            {/*</div>*/}
            <div>
                <NavLink to="/games" activeClassName={classes.active}><img src={gamesIcon} />  <span>Games</span> </NavLink>
            </div>
            <div>
                <NavLink to="/users" activeClassName={classes.active}><img src={usersIcon} />  <span>Users</span> </NavLink>
            </div>
            <div className={classes.settings}>
                <NavLink to="/settings" activeClassName={classes.active}> <img src={settingsIcon} /> <span>Settings</span> </NavLink>
            </div>
<UserOnlineContainer />
        </nav>
    );
}

export default Nav;
