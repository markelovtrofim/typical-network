import React from 'react';
import styles from './Chair.module.css';
import {ChairContact, ChairLight, ChairPersonalData} from "./ChairItem/ChairItem";

const Chair = ({profile, title}) => {
    return (
        <div className={styles.general}>
            <ChairPersonalData profile={profile} title={title.main}/>
            <ChairLight profile={profile} title={title.main}/>
            <ChairContact profile={profile} title={title.main}/>
        </div>
    )
};

export default Chair;
