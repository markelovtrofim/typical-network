import React from "react"
import styles from "./ProfileInfo.module.css"
import {Posts} from "./Posts/Posts"
import {Characteristic} from "./Сharacteristic/Сharacteristic"

export const ProfileInfo = (props: any) => {
  return <div className="container">
    <div className={styles.inner}>
      <Characteristic profile={props.profile} title={props.title}/>
      <Posts/>
    </div>
  </div>
}