import React, {useEffect} from "react"
import styles from "./header.module.css"
import "../../App.css"
import {NavLink} from "react-router-dom"
import {AccountSvg} from "../common/Svg"
import Burger from "./Burger/Burger"
import {useDispatch, useSelector} from "react-redux"
import {getMe} from "../../redux/auth-reducer"

export const Header: React.FC = () => {
    const dispatch = useDispatch()
    const state = useSelector((state: any) => ({
        isAuth: state.auth.isAuth,
        id: state.auth.id,
        login: state.auth.login,
        navData: state.navbar.navData
    }))
    useEffect(() => {
        dispatch(getMe())
    }, [])

    return <header className={styles.general}>
        <div className="container">
            <div className={styles.inner}>
                <NavLink className={styles.logo_link} to="/" title="Главная страница"><h1 className={styles.logo_left}>TYPICAL</h1><h1 className={styles.logo_right}>NETWORK</h1></NavLink>
                <nav>
                    {state.navData.map((d: any) => <NavLink className={styles.link} activeClassName={styles.active} key={d.id} to={d.link}><span>{d.text}</span></NavLink>)}
                </nav>
                <div className={styles.login}>
                    {state.isAuth ? <NavLink className={styles.login_link} activeClassName={styles.active_login} to={"/profile/" + state.id} title="Профиль"><AccountSvg className={styles.login_icon}/>{state.login}</NavLink>
                                  : <NavLink className={styles.login_link} activeClassName={styles.active_login} to="/login" title="Вход в аккаунт"><AccountSvg className={styles.login_icon}/>Log In</NavLink>}
                </div>
            </div>
            <Burger/>
        </div>
    </header>
}