import React from "react";
import classes from './Users.module.css';
import userDefault from '../../assets/img/user.jpg';
import {NavLink} from "react-router-dom";
import {userAPI} from '../../api/api';
import Paginator from "../common/Paginator/Paginator";

let User = (props) => {
    return (

       <div className={classes.wrapUsr} >

                <div className={classes.leftClmn}>
                    <div className={classes.avaUsr}>
                        <NavLink to={'/profile/' + props.user.id}>

                            <img src={props.user.photos.small !== null ? props.user.photos.small : userDefault}/></NavLink>
                    </div>
                    {props.user.followed
                        ? <button disabled={props.followingInProgress.some(id => id === props.user.id)} onClick={() => {
                            props.unfollow(props.user.id);

                        }}>Unfollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === props.user.id)} onClick={() => {
                            props.follow(props.user.id);


                        }}> Follow</button>
                    }

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
export default User;