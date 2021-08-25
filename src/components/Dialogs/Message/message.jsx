import style from "./message.module.css";
import React from "react";

const Message = (props) => {
    return (
        <p className={style.text}>{props.message}</p>
    )
}

export default Message
