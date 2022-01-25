import React, {useEffect} from "react";
import styles from "./Header.module.css";
import {NavLink} from "react-router-dom";
import {AccountSvg} from "../../assets/Svg";
import Burger from "./Burger/Burger";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";

const Header: React.FC =  React.memo(() => {
  const dispatch = useDispatch()
  // const state = useSelector((state: AppStateType) => ({
  //   isAuth: state.auth.isAuth,
  //   id: state.auth.id,
  //   login: state.auth.login,
  // }));
  //
  // useEffect(() => {
  //   dispatch(getMe());
  // }, [dispatch]);
  const state = null;
  return (
    <header className={styles.general}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.login}>
            {state.isAuth ?
              <NavLink className={styles.login_link} activeClassName={styles.active_login} to={"/profile/" + state.id}
                       title="Профиль"><AccountSvg className={styles.login_icon}/>{state.login}</NavLink>
              : <NavLink className={styles.login_link} activeClassName={styles.active_login} to="/login"
                         title="Вход в аккаунт"><AccountSvg className={styles.login_icon}/>Log In</NavLink>}
          </div>
        </div>
        <Burger/>
      </div>
    </header>
  );
});

export default Header;