import React from "react";
import classes from './Users.module.css';
import userDefault from '../../assets/img/user.jpg';
import {NavLink} from "react-router-dom";
import {userAPI} from '../../api/api';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = (props) => {
    // let pageCount = Math.ceil(props.totalUserCount / props.pageSize);
    // let pages = [];
    // for (let i = 1; i <= pageCount; i++) {
    //     pages.push(i);
    // }
    return (
        <div className={classes.user}>
            <Paginator totalItemCount={props.totalUserCount} pageSize={props.pageSize} onPageChanged={props.onPageChanged} currentPage={props.currentPage}/>
            {props.users.map(u => <User user={u} key={u.id} {...props} />)}
        </div>
    )
}
export default Users;