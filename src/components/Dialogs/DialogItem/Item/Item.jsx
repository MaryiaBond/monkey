import React from 'react';
import classes from './Item.module.css';
import {NavLink} from "react-router-dom";

const Item = (props) => {
    let linkPath = '/dialogs/' + props.id;
    return (
        <div className={classes.dialog__item}>
            <NavLink to={linkPath} className={classes.dialog} activeClassName={classes.active}> {props.username} </NavLink>
        </div>
    );
}
export default Item;
