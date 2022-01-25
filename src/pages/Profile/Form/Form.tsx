import React from 'react';
import styles from './Form.module.css';
import {Title} from "../../../components/Title/Title";
import {connect} from 'react-redux';
import {savePhoto} from "../../../redux/reducers/profile";
import {Avatar} from "../General/ProfileGeneral";
import defaultUserImage from "../../../assets/img/default-user.png";
import {Field, reduxForm} from "redux-form";
import {ChairContact} from "../Information/Сharacteristic/СharacteristicItem/ChairItem";
import {Button} from "../../../components/Button/Button";
import {PagLeftArrowSvg} from "../../../assets/Svg";

const AboutMeForm = (props: any) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div className={styles.item}>
          <div className={styles.title}>
            <Title title="О себе"/>
          </div>
          <div className={styles.item_item}>
            <p>Имя:</p>
            <Field className={styles.input} name='fullName'
                   validate={[]} component='input'/>
          </div>
          <div className={styles.item_item}>
            <p>Статус:</p>
            <Field className={styles.input} placeholder="Введите новый статус" name="status" component="input"/>
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
        <div className={styles.buttons_box}>
          <span className={styles.back} onClick={() => props.setEditMode(false)}>
              <PagLeftArrowSvg width={15} height={15}/>
          </span>
          <Button text="Сохранить"/>
        </div>
      </form>
    </div>
  )
}

const AboutFormRedux = reduxForm({form: "edit"})(AboutMeForm);

const Form = (props: any) => {
  const onMainPhotoSelected = (e: any) => {
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
                <input className={styles.input} style={{display: 'none'}} type={"file"} onChange={onMainPhotoSelected}/></label>
            </div>
          </div>
          <div className={styles.img}>
            <Avatar img={props.profile.data.photos.large ? props.profile.data.photos.large : defaultUserImage}
                    width={150} height={150}/>
          </div>
        </div>
        <AboutFormRedux
          // @ts-ignore
          setEditMode={props.setEditMode} profile={props.profile} initialValues={props.profile.data}
          onSubmit={props.onsubmit}/>
      </div>
    </div>
  )
}


let mapStateToProps = (state: any) => {
  return {
    isOwner: state.profilePage.profile.isOwner,
    profile: state.profilePage.profile
  }
}

export default connect(mapStateToProps, {savePhoto})(Form);