import React from "react"
import styles from "./Button.module.css"

interface ButtonPropsType {
  children: React.ReactNode
  onClick: () => void
}

export const Button: React.FC<ButtonPropsType> = ({children, onClick}) => {
  return <button onClick={onClick} className={styles.button}>{children}</button>
}
