import React from "react"
import styles from "./Сharacteristic.module.css"
import {ChairContact, ChairLight, ChairPersonalData} from "./СharacteristicItem/ChairItem"

export const Characteristic = (props: any) => {
    return (
        <div className={styles.general}>
            <ChairPersonalData profile={props.profile} title={props.title}/>
            <ChairLight profile={props.profile} title={props.title}/>
            <ChairContact profile={props.profile} title={props.title}/>
        </div>
    )
}