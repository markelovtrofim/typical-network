import React from "react"
import styles from "./ChairItem.module.css"
import {Title} from "../../../../common/Title/Title"
import {Field} from "redux-form"

const ChairItem = (props: any) => {
    return (
        <div className={styles.item}>
            <h4 className={styles.item_title}>{props.title}:</h4>
            {props.yep ? <Field className={styles.input} name={props.name}
                                validate={[]} component='input'/> : <span className={styles.item_text}>{props.text}</span>}
        </div>
    )
}

export const ChairPersonalData = (props: any) => {
    return (
        <div className={styles.general}>
            <Title title={props.title.aboutMe}/>
            <ChairItem title="Nick Name" text={props.profile.fullName}/>
            <ChairItem title="Ищет ли работу" text={String(props.profile.lookingForAJob)}/>
            <ChairItem title="Какую" text={props.profile.lookingForAJobDescription ? props.profile.lookingForAJobDescription : 'никакую'}/>
        </div>
    )
}

export const ChairLight = (props: any) => {
    return (
        <div className={styles.general}>
            <Title title={props.title.biography}/>
            <p className={styles.light_text}>{props.profile.aboutMe}</p>
        </div>
    )
}

export const ChairContact = (props: any) => {
    return <div className={styles.general}>
        {Object.keys(props.profile.contacts).map(key => {
            return <ChairItem key={key} title={key} text={props.profile.contacts[key]} yep={props.yep ? props.yep : false} name={'contacts.' + key}/>
        })}
    </div>
}