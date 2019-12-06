import React from 'react';
import classes from './Header.module.css';
import img from '../../assets/img/space_monkey_logo.jpg';
import {NavLink} from 'react-router-dom'

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src={img}/>
            <div className={classes.login}>
                {props.isAuth
                    ? <div>{props.login} <br/> <NavLink onClick={props.logout}>Log Out</NavLink></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;
