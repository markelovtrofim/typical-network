import React from "react";
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppStateType} from "./redux/store";
import {Main, Auth, Users, Dialogs, Music} from "./pages";
import Box from "@mui/material/Box";

export const App: React.FC = React.memo(() => {
  const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
  return (
    <HashRouter>
      <div className="app-wrapper">
        <Box component="main">
          <Switch>
            <Route exact path="/"><Main/></Route>
            <Route path="/login"><Auth/></Route>
            <Route path="/users"><Users/></Route>
            <Route path="/messages">{isAuth ? <React.Suspense fallback={<div>
              </div>}><Dialogs/></React.Suspense>
              : <Redirect to="/login"/>}</Route>
            <Route path="/news">{isAuth ? <h1>Новости</h1> : <Redirect to="/login"/>}</Route>
            <Route path="/music">{isAuth ? <Music/> : <Redirect to="/login"/>}</Route>
            <Route path="/settings">{isAuth ? <h1>Настройки</h1> :
              <Redirect to="/login"/>}</Route>
            <Route path="*"><h1>PAGE NOT FOUND. ERROR 404.</h1></Route>
          </Switch>
        </Box>
      </div>
    </HashRouter>
  );
});
