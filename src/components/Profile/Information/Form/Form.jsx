import React from 'react';
import styles from './Form.module.css';
import {Title} from "../../../common/Title/Title";
import {connect} from 'react-redux';
import {savePhoto} from "../../../../redux/profile-reducer";
import {Avatar} from "../../General/ProfileGeneral";
import defaultUserImage from "../../../../assets/img/default-user.png";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {ChairContact} from "../Chair/ChairItem/ChairItem";

const AboutMeForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <button>Сохранить</button>
            <div className={styles.item}>
                <div className={styles.title}>
                    <Title title="О себе"/>
                </div>
                <div className={styles.item_item}>
                    <p>Имя:</p>
                    <Field className={styles.input}name='fullName'
                           validate={[]} component='input'/>
                </div>
                <div className={styles.item_item}>
                    <p>Ищет работу:</p>
                    <Field placeholder='Full name' name='lookingForAJob'
                           validate={[]} component='input' type='checkbox'/>
                </div>
                <div className={styles.item_item}>
                    <p>Ваши скилы:</p>
                    <Field className={styles.desc} name='lookingForAJobDescription'
                           validate={[]} component='textarea' height={120}/>
                </div>
                <div className={styles.item_item}>
                    <p>Раскажите о себе:</p>
                    <Field className={styles.desc} name='aboutMe'
                           validate={[]} component='textarea' height={120}/>
                </div>
            </div>
            <div className={styles.item}>
               <div className={styles.title}>
                    <Title title="Контакты"/>
                </div>
                <div className={styles.contact}>
                    <ChairContact profile={props.profile.data} yep={true}/>
                </div>
            </div>
        </form>
    )
}

const AboutFormRedux = reduxForm({form: "edit"})(AboutMeForm);

const Form = ({savePhoto, profile, onsubmit}) => {
    if (!profile.data) {
        return <Redirect to={"/profile/" + 19172}/>
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }
    return (
        <div className={styles.main}>
            <h2 className={styles.header}>Редакировать профиль</h2>
            <div className={styles.inner}>
                <div className={styles.item}>
                    <div className={styles.title}>
                        <Title title="Фото профиля"/>
                        <div className={styles.title_button}>
                            <label className={styles.photo_change}>
                                Изменить
                                <input className={styles.input} style={{display:'none'}} type={"file"} onChange={onMainPhotoSelected}/></label>
                        </div>
                    </div>
                    <div className={styles.img}>
                        <Avatar img={profile.data.photos.large ? profile.data.photos.large : defaultUserImage} width={150} height={150}/>
                    </div>
                </div>
                <AboutFormRedux profile={profile} initialValues={profile.data} onSubmit={onsubmit}/>
            </div>
        </div>
    )
}


let mapStateToProps = (state) => {
    return {
        isOwner: state.profilePage.profile.isOwner,
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, {savePhoto})(Form);