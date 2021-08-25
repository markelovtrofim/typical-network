import React from 'react';
import styles from './FuncItem.module.css';
import {NavLink} from "react-router-dom";

const FuncItem = (props) => {
    const returnFirstItem = (num, img) => {
        if (img) {
            return img;
        } else {
            return (
                <p className={styles.num}>{props.num}</p>
            );
        }
    };
    return (
        <NavLink to={props.path} className={styles.item}>
            <div>{returnFirstItem(props.num, props.img)}</div>
            <div>
                <h3 className={styles.item_title}>{props.itemTitle}</h3>
                <p className={styles.item_text}>{props.itemText}</p>
            </div>
        </NavLink>
    );
};

export default FuncItem;
