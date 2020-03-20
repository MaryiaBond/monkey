import Field from "redux-form/es/Field";
import {FileInput, Input} from "../../../common/FormControls";
import {reduxForm} from "redux-form";
import classes from '../ProfileInfo.module.css';
import React from "react";
import {required} from "../../../../utility/validation";

const EditProfileForm = (props) => {

    let set = () => {
        props.setEditMode(false)
    }
    return (
        <div className={classes.formBlock}>

            <button onClick={set}>
                Cancel
            </button>
            <form onSubmit={props.handleSubmit}>
                <button className={classes.editBtnBlock} className={classes.btnSave} type="submit">Save</button>

                <div className={classes.editBlock}>
                    <div className={classes.inline}>aboutMe: <Field placeholder={props.aboutMe} name="aboutMe"
                           type="text"
                           component={Input} validate={''}/> </div>
                    <div className={classes.inline}>
                        Looking For a Job: <Field placeholder={props.lookingForAJob} name="lookingForAJob"
                                                  type="checkbox"
                                                  component={Input}
                                                  validate={''}/> </div>

                        <div className={classes.inline}>fullName: <Field placeholder={props.fullName} name="fullName"
                               type="text"
                               component={Input}
                                                                validate={''}/> </div>

                    <div>
                       <Contacts contacts={props.profile.contacts} />
                    </div>
                </div>

            </form>

        </div>

    )

}
const Contacts = ({contacts}) => {
    return (
        <div>
            {Object.keys(contacts).map(key => (<Field placeholder={key} name={"contacts." + key} type="text" component={Input}
                                                      validate={''} />))}
        </div>
    )
}

const EditProfileFormRedux = reduxForm({form: 'editProfile'})(EditProfileForm);
export default EditProfileFormRedux