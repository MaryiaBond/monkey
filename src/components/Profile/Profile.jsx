import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPosts from "./MyPosts/MyPosts";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {getPhoto} from "../../redux/profile-reducer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} getPhoto={props.getPhoto} />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;
