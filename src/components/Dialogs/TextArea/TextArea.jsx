import React from 'react';
import classes from './TextArea.module.css';
import {Field, reduxForm} from "redux-form/lib/immutable";
import {maxLength, required} from "../../../utility/validation";
import {Textarea} from "../../common/FormControls";
const maxLengthNumber20 = maxLength(20)
const TextArea = (props) => {
    let addNewMess = (values) => {
        if(values.newMess !== undefined) {
            props.addMessage(values.newMess);
            values.newMess = ""
        }
    }
    return (
        <TextAreaFormRedux onSubmit={addNewMess}/>

    )
}
const TextAreaForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div className={classes.area__mess}>
                    <Field name='newMess' component={Textarea} className={classes.input__mess} validate={[maxLengthNumber20, required]}/>
                    <div>
                        <button className={classes.btn__add}>Send Message</button>
                    </div>
                </div>
            </form>
        </div>

    )
}
const TextAreaFormRedux = reduxForm({form: 'addNewMess'})(TextAreaForm)
export default TextArea;