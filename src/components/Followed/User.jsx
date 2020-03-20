import React from "react";
import classes from '../Users/Users.module.css';
import userDefault from '../../assets/img/user.jpg';
import {NavLink} from "react-router-dom";

let UserFollowed = (props) => {
    return (
       <div className={classes.wrapUsr} >
                <div className={classes.leftClmn}>
                    <div className={classes.avaUsr}>
                        <NavLink to={'/profile/' + props.user.id}>
                            <img src={props.user.photos.small !== null ? props.user.photos.small : userDefault}/></NavLink>
                    </div>
                </div>
                <div className={classes.rightClmn}>
                    <div className={classes.row}>
                        <div className={classes.lInfo}>
                            <div className={classes.usrName}> {props.user.name}  </div>
                            <div className={classes.usrStatus}> {props.user.status}  </div>
                        </div>
                        <div className={classes.rInfo}>
                            <div className={classes.usrName}> {'props.user.location.country'}  </div>
                            <div className={classes.usrName}> {'props.user.location.city'}  </div>
                        </div>
                    </div>
                </div>


            </div>
    )
}
export default UserFollowed;