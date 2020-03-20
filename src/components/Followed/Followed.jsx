import React, {useEffect, useState} from "react";
import classes from "./Followed.module.css";
import {NavLink} from "react-router-dom";
import userOnlineIMG from "../../assets/img/user1.jpg";
import Redirect from "react-router-dom/es/Redirect";

const FollowedUsers = (props) => {
    return (
        <div className={classes.followedUsers}>
            {props.freindsOnline.filter(u => u.followed).map(u =>
                <Followed name={u.name} id={u.id} status={u.status} photo={u.photos}/>
           )}
        </div>

    )

}

const Followed = (props) => {
    let [page, setPage] = useState(false)
    useEffect(() => {
            if (window.location === '/profile/' + props.id) {
                window.location = ""
            }
        }, [page]
    )


    return (
        <div>
            <NavLink to={'/profile/' + props.id} onclick={() => setPage(true)}>
                <div className={classes.user__block}>
                    <div className={classes.followedImg}>
                        {!props.photo.small ? <img src={userOnlineIMG}/> : props.photo.small}
                       </div>
                    <div>{props.name}</div>
                    <div>{props.status}</div>

                </div>
                {page && <Redirect to={'/profile/' + props.id}/>}
            </NavLink>
        </div>

    );
}

export default FollowedUsers;
