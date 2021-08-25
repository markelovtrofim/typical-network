import {NavLink} from "react-router-dom";
import style from "./dialog_item.module.css";
import React from "react";

const Dialog = (props) => {
    let path = "/messages/" + props.id
    return (
        <ul>
            <li><NavLink className={style.link} to={path}>{props.name}</NavLink></li>
        </ul>
    );
}

export default Dialog
