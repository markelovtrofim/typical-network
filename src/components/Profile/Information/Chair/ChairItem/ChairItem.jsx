import React from "react";
import styles from './ChairItem.module.css';
import {Title} from '../../../../common/Title/Title'
import {Field} from "redux-form";

const ChairItem = (props) => {
    return (
        <div className={styles.item}>
            <h4 className={styles.item_title}>{props.title}:</h4>
            {props.yep ? <Field className={styles.input} name={props.name}
                                validate={[]} component='input'/> : <div className={styles.item_text}>{props.text}</div>}
        </div>
    )
}

export const ChairPersonalData = (props) => {
    return (
        <div className={styles.general}>
            <Title title={props.title.aboutMe}/>
            <ChairItem title="Nick Name" text={props.profile.fullName}/>
            <ChairItem title="Ищет ли работу" text={String(props.profile.lookingForAJob)}/>
            <ChairItem title="Какую" text={props.profile.lookingForAJobDescription ? props.profile.lookingForAJobDescription : 'никакую'}/>
        </div>
    )
}

export const ChairLight = (props) => {
    return (
        <div className={styles.general}>
            <Title title={props.title.biography}/>
            <p className={styles.light_text}>{props.profile.aboutMe}</p>
        </div>
    )
}

export const ChairContact = ({profile, yep=false}) => {
    return (
        <div className={styles.general}>
            {Object.keys(profile.contacts).map(key => {
                return (
                    <ChairItem key={key} title={key} text={profile.contacts[key]} yep={yep} name={'contacts.' + key}/>
                )
            })}
        </div>
    )
}

