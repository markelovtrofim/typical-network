import styles from "./Button.module.css";
import React from "react";

export const Button = (props) => {
    return <button className={styles.button}>{props.text}</button>
}