import React from "react"
import {Field, reduxForm} from "redux-form"
import {signInThunk} from "../../redux/auth-reducer"
import {useDispatch, useSelector} from "react-redux"
import {Input} from "../common/FormsControls/FormsControls"
import styles from "./Login.module.css"
import {Redirect} from "react-router-dom"

const LoginForm = (props: any) => {
    return <form onSubmit={props.handleSubmit} className={styles.general}>
        <div className={styles.inner}>
            <span>Добро пожаловать в</span>
            <div className={styles.logo}><h1 className={styles.logo_left}>TYPICAL</h1><h1 className={styles.logo_right}>NETWORK</h1></div>
            <div className={styles.test}>
                Можете посмотреть на мою работу войдя под тестовым аккаунтом<br/>
                <span><b>Email:</b> free@samuraijs.com</span>
                <span><b>Password:</b> free<br/></span>
            </div>
            <Field className={styles.input} placeholder={'Input email'} name={'email'} component={Input}/>
            <Field className={styles.input + ' ' + styles.password}  placeholder={'Input password'} name={'password'} component={Input}/>
            <button className={styles.button}>Вход</button>
            <div>
                <a className={styles.register} target="_blank" rel="noopener noreferrer" href="https://social-network.samuraijs.com/signUp">Регистрация</a>
            </div>
            {props.captchaParam && <img src={props.captchaParam} alt=""/>}
            {props.captchaParam && <Field placeholder="Введите текст с картинки" component={Input} name={'captcha'}/>}
        </div>
    </form>
}
const LoginReduxForm = reduxForm({form: 'email'})(LoginForm)

export const Login = () => {
    const state = useSelector((state: any) => ({
        isAuth: state.auth.isAuth,
        id: state.auth.id,
        captchaParam: state.auth.captchaParam
    }))
    const dispatch = useDispatch()

    const onSubmit = (formData: any) => {
        dispatch(signInThunk(formData.email, formData.password, true, formData.captcha))
    }
    if (state.isAuth) {return <Redirect to={"/profile/" + state.id}/>}
    // @ts-ignore
    return <LoginReduxForm captcha={state.captchaParam} onSubmit={onSubmit}/>
}