import React from 'react';
import {connect} from "react-redux";
import {HashRouter, Redirect, Route} from "react-router-dom";
import './App.css';
import HeaderContainer from "./components/Header/headerContainer";
import ProfileContainer from "./components/Profile/profile-container";
import UsersContainer from "./components/Users/Users-conainer";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main"
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Footer from "./components/Footer/Footer";
const DialogsContainer = React.lazy(() => import("./components/Dialogs/dialogs_container"));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if (!this.props.init) {
            return <div></div>
        }
        return (
            <HashRouter>
                <HeaderContainer/>
                <div className="app-wrapper">
                    <Route exact path="/"><Main/></Route>
                    <Route path="/login"><Login/></Route>
                    <Route path="/profile/:userId"><ProfileContainer/></Route>
                    <Route path="/users"><UsersContainer/></Route>
                    <Route path="/messages">{this.props.isAuth ? <React.Suspense fallback={<div></div>}><DialogsContainer/></React.Suspense> : <Redirect to="/login"/>}</Route>
                    <Route path="/news">{this.props.isAuth ? <h1>Новости</h1> : <Redirect to="/login"/>}</Route>
                    <Route path="/music">{this.props.isAuth ? <h1>Музыка</h1> : <Redirect to="/login"/>}</Route>
                    <Route path="/settings">{this.props.isAuth ? <h1>Настройки</h1> : <Redirect to="/login"/>}</Route>
                    <Footer/>
                </div>
            </HashRouter>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        init: state.app.initialized,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, {initializeApp}))(App);
