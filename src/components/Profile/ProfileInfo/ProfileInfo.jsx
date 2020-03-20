import React from 'react';
import classes from './ProfileInfo.module.css';
import avatar from '../../../assets/img/avatar2.jpg'
import Preloader from '../../../assets/common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus'
import Field from "redux-form/es/Field";
import {reduxForm} from "redux-form";
import {FileInput} from "../../common/FormControls";


//можно писать что-то типа const UploadPhotoForm = ({profile, status, updateStatus}) => { *и я обязательно буду так делать в будущем*

const UploadPhotoForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
          <Field name='photoInput' component={FileInput}/>  <br/>
            <button type="submit">upload</button>
        </form>
        )

}
const UploadPhotoFormRedux = reduxForm({form: 'uploadPhoto'})(UploadPhotoForm)
const ProfileInfo = (props) => {
    let uploadThisPhoto = (values) => {
        props.getPhoto(values.photoInput);
    }
    if (!props.profile)
        return (
            <Preloader/>
        )
    return (
        <div className={classes.main_block}>
            <UploadPhotoFormRedux onSubmit={uploadThisPhoto}/>
            <div className={`${classes.active} ${classes.content_status}`}><span>
                {/*{props.profile.aboutMe !==null ? props.profile.aboutMe : }*/}
                <ProfileStatus props={props.status} updateStatus={props.updateStatus}/></span></div>
            <div className={classes.avatar}><img
                src={props.profile.photos.small !== null ? props.profile.photos.small : avatar}/></div>
            <div className={classes.info}>
                <span>Name: {props.profile.fullName}</span>
                <span>Planet: 1AR-starRace</span>
                <span>Mission: {props.profile.lookingForAJobDescription}</span>
                <span>contacts: {props.profile.contacts.instagram} </span>
                <span>Web Site: www.&67!@=-`0929_______=-0</span>
            </div>
        </div>
    );
}

export default ProfileInfo;

