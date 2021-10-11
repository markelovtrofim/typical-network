import React from "react"
import "./App.css"
import {connect} from "react-redux"
import {HashRouter, Redirect, Route} from "react-router-dom"
import {Switch} from "react-router-dom"
import {Header} from "./components/Header/Header"
import {Users} from "./components/Users/Users";
import {Login} from "./components/Login/Login"
import {Main} from "./components/Main/Main"
import Footer from "./components/Footer/Footer"
import {Dialogs} from "./components/Dialogs/Dialogs"
import Profile from "./components/Profile/Profile"

const App = (props: any) => {
    return (
        <HashRouter>
            <Header/>
            <div className="app-wrapper">
                <Switch>
                    <Route exact path="/"><Main/></Route>
                    <Route path="/login"><Login/></Route>
                    <Route path="/profile/:userId"><Profile/></Route>
                    <Route path="/users"><Users/></Route>
                    <Route path="/messages">{props.isAuth ? <React.Suspense fallback={<div>
                        </div>}><Dialogs/></React.Suspense>
                        : <Redirect to="/login"/>}</Route>
                    <Route path="/news">{props.isAuth ? <h1>Новости</h1> : <Redirect to="/login"/>}</Route>
                    <Route path="/music">{props.isAuth ? <h1>Музыка</h1> : <Redirect to="/login"/>}</Route>
                    <Route path="/settings">{props.isAuth ? <h1>Настройки</h1> :
                        <Redirect to="/login"/>}</Route>
                    <Route path="*"><h1>PAGE NOT FOUND. ERROR 404.</h1></Route>
                </Switch>
                <Footer/>
            </div>
     </HashRouter>
    )
}

const mapStateToProps = (state: any) => {
    return {isAuth: state.auth.isAuth}
}

export default connect(mapStateToProps, null)(App)