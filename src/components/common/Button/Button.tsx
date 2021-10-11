import styles from "./Button.module.css"
import React from "react"

export const Button = (props: any) => <button className={styles.button}>{props.text}</button>