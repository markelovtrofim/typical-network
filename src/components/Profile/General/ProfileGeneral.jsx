import React from "react";
import styles from './ProfileGeneral.module.css';
import defaultUserImage from '../../../assets/img/default-user.png';
import {ClockSvg, DeleteSvg, PenSvg} from '../../common/Svg';

export let Time = (props) => {
    return (
        <div className={props.styles}>
            <ClockSvg className={styles.time_svg}/>
            <p className={styles.time_text}>
                {props.text}
            </p>
        </div>
    )
};

export let Avatar = (props) => {
    return <div>
        <img width={props.width} height={props.height} className={styles.img_box} src={props.img} alt=""/>
    </div>
};

let ProfileGeneral = ({profile, isOwner, logout, setEditMode, status}) => {
    const logoutOnClick = () => {
        logout()
    }
    return (
        <div>
            <div className={styles.general}>
                <span className={styles.background}></span>
                <div className={styles.title}>
                    <Avatar width="150" height="150" img={profile.photos.large != null ? profile.photos.large : defaultUserImage}/>
                    <h2 className={styles.full_name}>{profile.fullName}</h2>
                    <Time styles={styles.time} text="был(а) в сети в пределах нашей эры"/>
                    <p className={styles.status}>{status ? status : <i>статус не установлен</i>}</p>
                    {isOwner &&
                        <div className={styles.button_box}>
                            <div><button className={styles.refactor} onClick={() => setEditMode(true)}><PenSvg className={styles.svg}/>Редактировать</button></div>
                            <div><button className={styles.logout} onClick={logoutOnClick}><DeleteSvg className={styles.svg}/>Выйти</button></div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
};

export default ProfileGeneral;
