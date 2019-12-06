import React from 'react';
import classes from './Login.module.css';
import Redirect from "react-router-dom/es/Redirect";
import {reduxForm} from "redux-form";
// import Field from "redux-form/es/Field";
import {createField, Input} from "../common/FormControls";
import {required} from "../../utility/validation";
import Field from "redux-form/es/Field";


const FormLogin = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.form}>
            <Field placeholder={"login"} name={"email"} type="text" component={Input} validate={[required]}/>
            <Field placeholder={"password"} name={"pass"} type="password" component={Input} validate={[required]}/>
            <div className={classes.checkbox}>
                <Field name={"rememberMe"} id="remember" type={"checkbox"} component={Input}/>
                <label htmlFor="#remember">Remeber Me in flash photography & screens</label>
            </div>
            {props.error && <div className={classes.formHasError}>
                {props.error}
            </div>}
            <button type={"submit"} label="submit">Submit</button>
        </form>
    );
}
const Login = (props) => {
    if (props.isAuth) return <Redirect to={'/profile'} />
    const getLoginData = (formData) => {
        props.login(formData.email, formData.pass, true)
        // if (isAuth) return <Redirect to={'/profile'} />
    }
    return (
        <div className={classes.login}>
            <h1>& now you gonna Log In</h1>
            <LoginReduxForm onSubmit={getLoginData}/>
        </div>
    );
}
const LoginReduxForm = reduxForm({form: 'loginForm'})(FormLogin)
export default Login;



{/*<form onSubmit={handleSubmit} className={classes.form}>*/}
{/*    {createField ("login", "email", "text", Input, [required] , {id: "importantId"})}*/}
{/*    /!*<Field placeholder={"login"} name={"email"} type="text" component={Input} validate={[required]}/>*!/*/}
{/*    /!*<Field placeholder={"password"} name={"pass"} type="password" component={Input} validate={[required]}/>*!/*/}
{/*    {createField ("password", "pass", "password", Input, [required] )}*/}
{/*    <div className={classes.checkbox}>*/}
{/*        /!*<Field name={"rememberMe"} id="remember" type={"checkbox"} component={Input}/>*!/*/}
{/*        {createField ("checkbox", "rememberMe", "checkbox", "checkbox", [required] )}*/}

{/*        /!*<label htmlFor="#remember">Remeber Me in flash photography & screens</label>*!/*/}
{/*    </div>*/}
{/*    { error && <div className={classes.formHasError}>*/}
{/*        {error}*/}
{/*    </div>}*/}
{/*    <button>Submit</button>*/}
{/*</form>*/}