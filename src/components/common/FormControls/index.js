import React from 'react';
import classes from './index.module.css'
import Field from "redux-form/es/Field";
import {required} from "../../../utility/validation";

export const createField = (placeholder, name, type, componentName, validate, props = {}, text = "" ) => {
   return <div><Field placeholder={placeholder} name={name} type={type} component={componentName} validate={validate}
                 {...props} /> {text} </div>
}

const FormControl = ({input, meta: {touched, error}, children, ...props}) => {
    const hasError = touched && error;
    return (
        <div className={classes.formControl + " " + (hasError ? classes.error : " ")}>
            <div>
                {children}
            </div>
            {hasError && <span className={classes.errorText}>{error}</span>}
        </div>
    )
}


export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return (
        <FormControl {...props}>
            <textarea {...input} {...restProps} />
        </FormControl>
    )
}
export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return (
        <FormControl {...props}>
            <input {...input} {...restProps} />
        </FormControl>
    )
}

const adaptFileEventToValue = delegate => e => delegate(e.target.files[0]);

export const FileInput = ({
                       input: { value: omitValue, onChange, onBlur, ...inputProps },
                       meta: omitMeta,
                       ...props
                   }) => {
    return (
        <input
            onChange={adaptFileEventToValue(onChange)}
            onBlur={adaptFileEventToValue(onBlur)}
            type="file"
            {...props.input}
            {...props}
        />
    );
};
