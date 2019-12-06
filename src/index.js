import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import store from './redux/redux-store'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import MonkeySpaceApp from "./App";
// import {default} from "react-redux/es/utils/Subscription";
        ReactDOM.render(
            <MonkeySpaceApp />, document.getElementById('root'))


        // rerenderEntireTree(store.getState());
        // store.subscribe(() => {
        //         let state = store.getState();
        //         rerenderEntireTree(state)
        //     })
            // If you want your app to work offline and load faster, you can change
            // unregister() to register() below. Note this comes with some pitfalls.
            // Learn more about service workers: https://bit.ly/CRA-PWA
        serviceWorker.unregister();