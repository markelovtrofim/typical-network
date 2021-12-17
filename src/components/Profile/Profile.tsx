import React, {useEffect, useState} from "react"
import styles from './Profile.module.css'
import {Redirect} from "react-router-dom"
import ProfileGeneral from "./General/ProfileGeneral"
import {ProfileInfo} from "./Information/ProfileInfo"
import Form from "./Form/Form"
import {withRouter} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {getUserProfile, owner, savePhoto, saveProfile, getStatus, updateStatus} from "../../redux/profile-reducer";
import {logout} from "../../redux/auth-reducer"

const Profile: React.FC = React.memo((props: any) => {
  const state = useSelector((state: any) => ({
    profilePage: state.profilePage,
    userId: state.auth.id,
    isAuth: state.auth.isAuth,
    id: state.profilePage.profile.data.id,
    profile: state.profilePage.profile.data,
    title: state.profilePage.profile.title
  }))
  const dispatch = useDispatch()
  useEffect(() => {
    let userId = props.match.params.userId
    if (state.userId === Number(props.match.params.userId)) {
      dispatch(owner(true))
    } else {
      dispatch(owner(false))
    }
    if (state.id === undefined) {
      dispatch(getUserProfile(userId))
      dispatch(getStatus(userId))
    }
  }, [dispatch, props.match.params.userId, state.id, state.userId])
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
  if (isEmptyObject(state.profilePage.profile.data)) {
    return <></>
  } else {
    if (editMode) {
      return <Form setEditMode={setEditMode} onsubmit={onsubmit}/>
    } else {
      return <div className={styles.main}>
        <ProfileGeneral profile={state.profilePage.profile.data} isOwner={state.profilePage.profile.isOwner}
                        // @ts-ignore
                        savePhoto={savePhoto} logout={logout} setEditMode={setEditMode}
                        status={state.profilePage.profile.status}/>
        <ProfileInfo profile={state.profilePage.profile.data} title={state.profilePage.profile.title}/>
      </div>
    }
  }
})

export default withRouter(Profile)