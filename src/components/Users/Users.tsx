import React, {useEffect, useState} from "react"
import style from "./Users.module.css"
import "../../App.css"
import {User} from "./User/User"
import {Paginator} from "./Pagination/Paginator"
import {Redirect} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {getStatus, getUserProfile} from "../../redux/profile-reducer"
import {changeUsers, getUsers} from "../../redux/user-reducer"

export const Users = () => {
    const [click, setClick] = useState(false)
    const dispatch: any = useDispatch()
    const state = useSelector((state: any) => ({
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        userId: state.profilePage.profile.data.userId,
        disable: state.usersPage.disable
    }))
    const getProfilePage = (userId: any) => {
        dispatch(getStatus(userId))
        dispatch(getUserProfile(userId)).then(() => setClick(true))
    }
    const onPageChanged = (p: any) => {
        dispatch(changeUsers(p, state.pageSize))
    }
    useEffect(() => {
        dispatch(getUsers(state.currentPage, state.pageSize))
    },[dispatch, state.currentPage, state.pageSize])
    if (click) {return (<Redirect to={"/profile/" + state.userId}/>)}
    return <div className="container">
        <div className={style.general}>
            <h1 className={style.title}>Ищи друзей среди {state.totalUserCount} пользователей</h1>
            <div className={style.items}>
                {state.users.map((u: any) => <User key={u.id} id={u.id} photo={u.photos.large}
                                            name={u.name} followed={u.followed} getProfilePage={getProfilePage}
                                            disable={state.disable}/>)}
            </div>
            <Paginator onPageChanged={onPageChanged} totalUserCount={state.totalUserCount}
                       pageSize={state.pageSize} currentPage={state.currentPage}/>
        </div>
    </div>
}