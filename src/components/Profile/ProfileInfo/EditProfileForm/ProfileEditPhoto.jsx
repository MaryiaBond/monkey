import Field from "redux-form/es/Field";
import {FileInput} from "../../../common/FormControls";
import {reduxForm} from "redux-form";
import React from "react";

const UploadPhotoForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <Field name='photoInput' component={FileInput}/>  <br/>
            <button type="submit">upload</button>
        </form>
    )

}
const  UploadPhotoFormRedux = reduxForm({form: 'uploadPhoto'})(UploadPhotoForm);
export default UploadPhotoFormRedux