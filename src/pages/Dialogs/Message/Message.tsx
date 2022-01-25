import style from "./Message.module.css"
import React from "react"

export const Message: React.FC<{message: string}> = ({message}) => {
    return <p className={style.text}>{message}</p>
}