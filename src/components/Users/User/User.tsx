import React from "react"
// @ts-ignore
import style from "../Users.module.css"
import {Avatar, Time} from "../../Profile/General/ProfileGeneral"
// @ts-ignore
import defaultUserImage from "../../../assets/img/default-user.png"
import {isFollow, isUnFollow} from "../../../redux/user-reducer"
import {useDispatch} from "react-redux"

export const User = (props: any) => {
    const dispatch = useDispatch()
    return <div className={style.items}>
        <div className={style.item}>
            <div className={style.inner}>
                <Avatar width="50" height="50" img={props.photo != null ? props.photo : defaultUserImage}/>
                <button className={style.name} onClick={() => props.getProfilePage(props.id)}>{props.name}</button>
                <Time text="Недавно Был(a) в сети" styles={style.time}/>
                <div>{props.followed ? <button disabled={props.disable} className={style.unfollow} onClick={() => {dispatch(isUnFollow(props.id))}}>Удалить</button>
                                     : <button disabled={props.disable} className={style.follow} onClick={() => {dispatch(isFollow(props.id))}}>Добавить</button>}
                </div>
            </div>
        </div>
    </div>
}