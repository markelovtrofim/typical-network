import React from "react";
import styles from './ProfileGeneral.module.css';
import defaultUserImage from '../../../assets/img/default-user.png';
import {ClockSvg} from '../../common/Svg';

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

let ProfileGeneral = ({profile, isOwner, savePhoto, logout, setEditMode}) => {
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
                    <p className={styles.status}>
                        Привет мир это статус заглушка. Когда dev созреет он вставит статус каждого пользователя. Всем мир.
                    </p>
                    {isOwner &&
                        <div className={styles.button_box}>
                            <button className={styles.refactor} onClick={() => setEditMode(true)}>Редактировать</button>
                            <button className={styles.logout} onClick={logoutOnClick}>Выйти</button>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
};

export default ProfileGeneral;
