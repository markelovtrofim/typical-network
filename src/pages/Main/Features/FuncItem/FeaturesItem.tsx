import React from "react"
import styles from "./FeaturesItem.module.css"
import {NavLink} from "react-router-dom"

export const FuncItem = (props: any) => {
    const returnFirstItem = (num: any, img: any) => {
        return img ? img : <p className={styles.num}>{props.num}</p>
    }
    const array = props.path.split('')
    if (props.path === '/profile/') {
        array.push(props.userId ? props.userId : 2)
    }
    const path = array.join('')
    return <NavLink to={path} className={styles.item}>
        <div>{returnFirstItem(props.num, props.img)}</div>
        <div>
            <h3 className={styles.item_title}>{props.itemTitle}</h3>
            <p>{props.itemText}</p>
        </div>
    </NavLink>
}