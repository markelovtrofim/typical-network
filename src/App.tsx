import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {Auth, Music, Users} from "./pages";
import {useSelector} from "react-redux";
import {AppStateType} from "./redux/store";
import {makeStyles} from "@mui/styles";
import {SideMenu} from "./components/SideMenu";
import {Typography} from "@mui/material";
import Layout from "./layout";

const useStyles = makeStyles(({
  appWrapper: {},
  appInner: {
    display: 'flex'
  },
  alone: {
    fontSize: '40px'
  }
}))

export const App: React.FC = React.memo(() => {
  const classes = useStyles();
  const isAuth = useSelector((state: AppStateType) => state.auth.isAuth);

  return (
    <div className={classes.appWrapper}>
      <Switch>

        <Route exact path="/login">
          <Auth/>
        </Route>
        {!isAuth && <Redirect to="/login"/>}

        <Route exact path="/home">
          <Layout>
            <Typography className={classes.alone}>
              HOME
            </Typography>
          </Layout>
        </Route>

        <Route exact path="/">
          <Redirect to="/home"/>
        </Route>

        <Route exact path="/profile">
          <Layout>
            <Typography className={classes.alone}>
              Profile
            </Typography>
          </Layout>
        </Route>

        <Route exact path="/users">
          <Layout>
            <Users/>
          </Layout>
        </Route>

        <Route exact path="/messages">
          <Layout>
            <React.Suspense fallback={<></>}>
              <Typography className={classes.alone}>Messages</Typography>
            </React.Suspense>
          </Layout>
        </Route>

        <Route exact path="/news">
          <Layout>
            <Typography className={classes.alone}>Новости</Typography>
          </Layout>
        </Route>

        <Route exact path="/music">
          <Layout>
            <Music/>
          </Layout>
        </Route>

        <Route exact path="/settings">
          <Layout>
            <Typography className={classes.alone}>Настройки</Typography>
          </Layout>
        </Route>

        <Route path="*">
          <h1 className={classes.alone}>404</h1>
        </Route>

      </Switch>
    </div>
  );
});
