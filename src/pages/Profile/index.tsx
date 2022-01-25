import React, {useEffect, useState} from "react"
import styles from './Profile.module.css'
import {Redirect} from "react-router-dom"
import ProfileGeneral from "./General/ProfileGeneral"
import {ProfileInfo} from "./Information/ProfileInfo"
import Form from "./Form/Form"
import {withRouter} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {getUserProfile, savePhoto, saveProfile, getStatus, updateStatus} from "../../redux/reducers/profile";
import {actions} from "../../redux/reducers/profile";
import {AppStateType} from "../../redux/store";

const Profile: React.FC = React.memo((props: any) => {
  // const state = useSelector((state: AppStateType) => ({
  //   profile: state.profile,
  //   userId: state.auth.id,
  //   isAuth: state.auth.isAuth
  // }))
  const dispatch = useDispatch()
  useEffect(() => {
    let userId = props.match.params.userId
    if (state.userId === Number(props.match.params.userId)) {
      dispatch(actions.setOwner(true))
    } else {
      dispatch(actions.setOwner(false))
    }
    if (state.id === undefined) {
      dispatch(getUserProfile(userId))
      dispatch(getStatus(userId))
    }
  }, [dispatch, props.match.params.userId, state.profile.id, state.userId])
  let [editMode, setEditMode] = useState<boolean>(false)
  if (!state.isAuth) {
    return <Redirect to="/login"/>
  }
  const onsubmit = async (data: any) => {
    await dispatch(saveProfile(data));
    setEditMode(false)
    dispatch(updateStatus(data.status))
  }

  const isEmptyObject = (obj: any) => {
    for (let i in obj) {
      if (obj.hasOwnProperty(i)) {
        return false;
      }
    }
    return true;
  }
  if (isEmptyObject(state.profile.profile.data)) {
    return <></>
  } else {
    if (editMode) {
      return <Form setEditMode={setEditMode} onsubmit={onsubmit}/>
    } else {
      return <div className={styles.main}>
        <ProfileGeneral profile={state.profile.profile.data} isOwner={state.profile.profile.isOwner}
                        // @ts-ignore
                        savePhoto={savePhoto} logout={logout} setEditMode={setEditMode}
                        status={state.profile.profile.status}/>
        <ProfileInfo profile={state.profile.profile.data} title={state.profile.profile.title}/>
      </div>
    }
  }
});

export default withRouter(Profile);