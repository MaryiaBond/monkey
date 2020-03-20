import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import dialogReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import navBarReducer from "./navbar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import gamesReducer from "./games-reducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from "redux-form"
import appReducer from "./app-reducer";
export let reducers = combineReducers({
    dialogPage: dialogReducer,
    profilePage: profileReducer,
    navBar: navBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    games: gamesReducer,
    form: formReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)
));

// let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;