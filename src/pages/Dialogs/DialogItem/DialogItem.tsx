import {NavLink} from "react-router-dom"
import style from "./DialogItem.module.css"
import React from "react"

type PropsType = {
    id: number
    name: string
}

export const Dialog: React.FC<PropsType> = ({id, name}) => {
    let path = "/messages/" + id
    return <ul><li><NavLink className={style.link} to={path}>{name}</NavLink></li></ul>
}