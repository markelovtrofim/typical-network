import React from 'react';
import styles from "./Header.module.css";
import Burger from "./Burger/Burger";

const Header: React.FC = React.memo(() => {
  return (
    <header className={styles.general}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.login}>
            {null}
            {/*{state.isAuth ?*/}
            {/*  <NavLink className={styles.login_link} activeClassName={styles.active_login} to={"/profile/" + state.id}*/}
            {/*           title="Профиль"><AccountSvg className={styles.login_icon}/>{state.login}</NavLink>*/}
            {/*  : <NavLink className={styles.login_link} activeClassName={styles.active_login} to="/login"*/}
            {/*             title="Вход в аккаунт"><AccountSvg className={styles.login_icon}/>Log In</NavLink>*/}
            {/*}*/}
          </div>
        </div>
        <Burger/>
      </div>
    </header>
  );
});

export default Header;