import React from "react"
import "./App.css"
import {useDispatch, useSelector} from "react-redux"
import {HashRouter, Redirect, Route} from "react-router-dom"
import {Switch} from "react-router-dom"
import {Header} from "./components/Header/Header"
import {Users} from "./pages/Users";
import {Login} from "./components/Login/Login"
import {Main} from "./components/Main/Main"
import Footer from "./components/Footer/Footer"
import {Dialogs} from "./components/Dialogs/Dialogs"
import Profile from "./components/Profile/Profile"
import {AppStateType} from "./redux/store";

const App: React.FC = React.memo(() => {
  const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
  const dispatch = useDispatch()
  return (
    <HashRouter>
      <Header/>
      <div className="app-wrapper">
        <Switch>
          <Route exact path="/"><Main/></Route>
          <Route path="/login"><Login/></Route>
          <Route path="/profile/:userId"><Profile/></Route>
          <Route path="/users"><Users/></Route>
          <Route path="/messages">{isAuth ? <React.Suspense fallback={<div>
            </div>}><Dialogs/></React.Suspense>
            : <Redirect to="/login"/>}</Route>
          <Route path="/news">{isAuth ? <h1>Новости</h1> : <Redirect to="/login"/>}</Route>
          <Route path="/music">{isAuth ? <h1>Музыка</h1> : <Redirect to="/login"/>}</Route>
          <Route path="/settings">{isAuth ? <h1>Настройки</h1> :
            <Redirect to="/login"/>}</Route>
          <Route path="*"><h1>PAGE NOT FOUND. ERROR 404.</h1></Route>
        </Switch>
        <Footer/>
      </div>
    </HashRouter>
  )
})

export default App