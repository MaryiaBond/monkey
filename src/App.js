import React, { Component } from 'react';
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import Nav from "./components/Nav/Nav";
import { HashRouter, Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from './components/Profile/ProfileContainer';
import LoginPage from './components/Login/LoginContainer'
import connect from "react-redux/es/connect/connect";
import { compose } from "redux";
import withRouter from "react-router-dom/es/withRouter";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./assets/common/Preloader/Preloader";
import Games from "./components/Games/Games";
import { Provider } from "react-redux";
import store from "./redux/redux-store";
import Redirect from "react-router-dom/es/Redirect";
import withSuspense from "./hoc/withSuspense";

const CatEatBradContainer = React.lazy(() =>
    import ('./components/Games/CatEatBrad/CatEatBradContainer'));

const SpaceAnimalsContainer = React.lazy(() =>
    import ("./components/Games/SpaceAnimals/SpaceAnimalsContainer"));


class App extends Component {
    componentDidMount() {
        this.props.initializeApp()
            //если ты вылогинен, то ничего не работает (это было из-за рефакторинга компоненты логина)
            // if (!this.props.isAuth) {
            //     // return <Redirect to={'/profile'} />
            //
            // }
            // else {
            //
            // }
    }


    render() {
        if (!this.props.initialized) {
            return <Preloader / >
        }
        return ( <
            div className = 'app-wrapper' >
            <
            HeaderContainer / >
            <
            Nav / >
            <
            div className = "app-wrapper-content" >
            <
            Route path = "/dialogs"
            render = {
                () => < DialogsContainer / > }
            /> <
            Route path = "/profile/:userId?"
            render = {
                () => < ProfileContainer / > }
            /> <
            Route path = "/news"
            render = {
                () => < News / > }
            /> <
            Route path = "/music"
            render = {
                () => < Music / > }
            /> <
            Route path = "/games"
            render = {
                () => < Games / > }
            /> <
            Route path = "/users"
            render = {
                () => < UsersContainer / > }
            /> <
            Route path = "/setttings"
            render = {
                () => < Settings / > }
            /> <
            Route path = "/login"
            render = {
                () => < LoginPage / > }
            /> <
            Route path = "/space_animals"
            render = { withSuspense(SpaceAnimalsContainer) }
            /> <
            Route path = "/cat_eat_brad"
            render = { withSuspense(CatEatBradContainer) }
            /> <
            /div> <
            /div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, { initializeApp }))(App);

const MonkeySpaceApp = (props) => {
    return <HashRouter basename={process.env.PUBLIC_URL}>
        <Provider store = { store } >
        <AppContainer />
        </Provider> </HashRouter >
};


export default MonkeySpaceApp;