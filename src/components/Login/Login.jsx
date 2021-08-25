import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {signInThunk} from '../../redux/auth-reducer';
import {connect} from 'react-redux';
import {Input} from '../common/FormsControls/FormsControls';
import styles from './Login.module.css';
import {Redirect} from "react-router-dom";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.general}>
            <div className={styles.inner}>
                <p className={styles.welcome}>Добро пожаловать в </p>
                <div className={styles.logo}><h1 className={styles.logo_left} >TYPICAL</h1><h1 className={styles.logo_right}>NETWORK</h1></div>
                <Field className={styles.input} placeholder={'Input email'} name={'email'} component={Input}/>
                <Field className={styles.input}  placeholder={'Input password'} name={'password'} component={Input}/>
                <button className={styles.button}>Вход</button>
                <div>
                    <a className={styles.register} target="_blank" rel="noopener noreferrer" href="https://social-network.samuraijs.com/signUp">Регистрация</a>
                </div>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'email'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        debugger
        props.signInThunk(formData.email, formData.password, true)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile/" + props.id} />
    }

    return <div>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        id: state.auth.id
    }
}


const LoginContainer = connect(mapStateToProps, {signInThunk})(Login)

export default LoginContainer;
