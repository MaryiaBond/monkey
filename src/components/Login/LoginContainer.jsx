import React from 'react';
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import LoginPage from "./Login"

let state = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

const LoginContainer = connect(state, {login})(LoginPage);
export default LoginContainer;