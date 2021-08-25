import React from 'react';
import Intro from "./Intro/Intro";
import FuncContainer from "./Func/FuncContainer";
import styles from './Main.module.css';
import HeaderContainer from "../Header/headerContainer";

const Main = () => {
    return (
        <div className={styles.main}>
            <HeaderContainer/>
            <Intro/>
            <FuncContainer/>
        </div>
    )
}

export default Main;
