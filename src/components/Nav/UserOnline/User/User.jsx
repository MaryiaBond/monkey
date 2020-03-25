import React, {useState, useEffect} from 'react';
import classes from './User.module.css';
import userOnlineIMG from "../../../../assets/img/user1.jpg";
import {NavLink} from "react-router-dom";
import Redirect from "react-router-dom/es/Redirect";

const User = (props) => {
    let [page, setPage] = useState(false)
    useEffect(() => {
            if (window.location === '/profile/' + props.id) {
                window.location = ""
            }
    }, [page]
    )



    return (

        <NavLink to={'/profile/' + props.id} onclick={()=> setPage(true)}>
            <div className={classes.user__block}>
            <div className={classes.user__img}><img src={userOnlineIMG}/></div>
            <label>{props.name}</label>
        </div>
            {page && <Redirect to={'/profile/' + props.id}/>}
        </NavLink>
    );
}

export default User;
