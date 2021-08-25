import React, {useState} from 'react';
import styles from './Profile.module.css';
import {Redirect} from "react-router-dom";
import ProfileGeneral from "./General/ProfileGeneral";
import ProfileInform from "./Information/ProfileInfo";
import Form from "./Information/Form/Form";

const Profile = (props) => {
    let [editMode, setEditMode] = useState(false)
    if (!props.isAuth) {
        return (
            <Redirect to="/login"/>
        )
    }

    const onsubmit = (data) => {
        props.saveProfile(data).then(() => {
            setEditMode(false)
        })
    }

    const isEmptyObject = (obj) => {
        for (let i in obj) {
            if (obj.hasOwnProperty(i)) {
                return false;
            }
        }
        return true;
    }
    if (isEmptyObject(props.profilePage.profile.data)) {
        return <div></div>
    } else {
        if (editMode) {
            return <Form setEditMode={setEditMode} onsubmit={onsubmit}/>
        } else {
            return (
                <div className={styles.main}>
                    <ProfileGeneral profile={props.profilePage.profile.data} isOwner={props.profilePage.profile.isOwner}
                                    savePhoto={props.savePhoto} logout={props.logout} setEditMode={setEditMode}/>
                    <ProfileInform profile={props.profilePage.profile.data} title={props.profilePage.profile.title}/>
                </div>
            )
        }
    }
};

export default Profile;
