import React, {useState} from 'react';
import classes from './ProfileInfo.module.css';
import avatar from '../../../assets/img/avatar2.jpg'
import Preloader from '../../../assets/common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus'
import UploadPhotoFormRedux from "./EditProfileForm/ProfileEditPhoto";
import EditProfileFormRedux from "./EditProfileForm/ProfileEditForm";
import {getInfo, setInfo} from "../../../redux/profile-reducer";





const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false)

    let changeProfileInfo = (value) => {
        props.getInfo(value)
    }
    let uploadThisPhoto = (values) => {
        props.getPhoto(values.photoInput);
        setEditMode(false)
    }
    if (!props.profile)
        return (
            <Preloader/>
        )
    return (
        <div className={classes.main_block}>
            {props.isOwner && !editMode && <UploadPhotoFormRedux onSubmit={uploadThisPhoto}/>}
            <div className={`${classes.active} ${classes.content_status}`}><span>
                <ProfileStatus props={props.status} updateStatus={props.updateStatus}/></span></div>
            <div className={classes.avatar}><img
                src={props.profile.photos.small !== null ? props.profile.photos.small : avatar}/></div>
            <div className={classes.info}>
                <div className={classes.editBtnBlock}>
                    {props.isOwner && !editMode && <button onClick={() => {setEditMode(true)}}>Edit</button>}
                    {editMode && <EditProfileFormRedux onSubmit={changeProfileInfo} setEditMode={setEditMode} profile={props.profile} /> }
                </div>


                {!editMode &&  <div>
                    Name: <span className={classes.userName}>{props.profile.fullName}</span> <br/>
                    Job Desc: <span className={classes.userName}>{props.profile.lookingForAJobDescription}</span>
                    <div className={classes.jobInfo}>{!props.profile.lookingForAJob && 'Looking for a job'}</div>
                    <div>
                        contacts:{Object.keys(props.profile.contacts).map(key => (<Contacts
                        contactTitle={key} contactValue={props.profile.contacts[key]}/>) )}
                    </div>

                </div>}



            </div>
        </div>
    );
}

const Contacts = ({contactTitle, contactValue}) => {
    return (
        <div>
            {contactTitle} : {contactValue}
        </div>
    )
}

export default ProfileInfo;

