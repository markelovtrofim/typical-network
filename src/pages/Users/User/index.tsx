import React from 'react';
import {useDispatch} from 'react-redux';

// @ts-ignore
import styles from './User.module.scss';
import {Avatar, Time} from '../../../components/Profile/General/ProfileGeneral';
// @ts-ignore
import defaultUserImage from '../../../assets/img/default-user.png';
import {follow, unFollow} from '../../../redux/reducers/users-reducer';


interface UserPropsType {
  id: number
  name: string
  photo: string | null
  followed: boolean
  disable: boolean

  getProfilePage: (id: number) => void

}

export const User: React.FC<UserPropsType> = ({id, name, photo, followed, disable, getProfilePage}) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.item}>
      <div className={styles.item__inner}>
        <Avatar width="50" height="50" img={photo != null ? photo : defaultUserImage}/>
        <button className={styles.item__name} onClick={() => getProfilePage(id)}>{name}</button>
        <Time text={'Недавно Был(a) в сети'} styles={styles.item__time}/>
        <div>{followed ? <button disabled={disable} className={styles.item__un_follow} onClick={() => {
            dispatch(follow(id))
          }}>Удалить</button>
          : <button disabled={disable} className={styles.item__follow} onClick={() => {
            dispatch(unFollow(id))
          }}>Добавить</button>}
        </div>
      </div>
    </div>
  );
};
