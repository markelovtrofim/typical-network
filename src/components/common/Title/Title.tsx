import styles from "./Title.module.css"
import {RightArrowSvg} from "../Svg"
import React from "react"

export const Title = (props: any) => {
    return <div className={styles.header}>
        <h3 className={styles.title}>{props.title}</h3>
        <RightArrowSvg className={styles.arrow}/>
    </div>
}