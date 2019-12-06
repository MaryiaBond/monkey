// import {hungryCat} from "../../assets/img/hungryCat.jpg"
import React from 'react';
import classes from './Games.module.css';
import {NavLink} from "react-router-dom";

const Games = (props) => {
    

    return (
        <div className={classes.gameBlock}>
        <NavLink to="/space_animals">  <div>Space Animals</div> </NavLink>
        <NavLink to="/cat_eat_brad">  <div>Cat eat brad</div> </NavLink>
        </div>
    );
}

export default Games;