import React from 'react';
import classes from './UserOnline.module.css';
import User from "./User/User";

const UserOnline = (props) => {
let dataOnlineUser = props.freindsOnline.filter(u => u.followed).map(online =>
    <>
        <User name={online.name} id={online.id}/>
    </>
    
   );
    return (
        <div className={classes.user__block}>
             {dataOnlineUser}
        </div>
    );
}

export default UserOnline;
