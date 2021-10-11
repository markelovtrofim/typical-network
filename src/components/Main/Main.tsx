import React from 'react'
import {Intro} from "./Intro/Intro"
import {Features} from "./Features/Features"
import styles from "./Main.module.css"

export const Main = () => {
    return <div className={styles.main}>
        <Intro/>
        <Features/>
    </div>
}