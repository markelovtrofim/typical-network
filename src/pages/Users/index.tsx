import React, {useEffect} from 'react';

import {User} from './User';
import {useDispatch, useSelector} from 'react-redux';

import '../../App.css';
// @ts-ignore
import styles from "./Users.module.scss";
import {getUsersSelector} from "../../redux/selectors/users-selector";
import {getUsers} from "../../redux/reducers/users-reducer";

export const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector(getUsersSelector)
  // const state = useSelector((state: any) => ({
  //   users: state.usersPage.users,
  //   pageSize: state.usersPage.pageSize,
  //   totalUserCount: state.usersPage.totalUserCount,
  //   currentPage: state.usersPage.currentPage,
  //   isFetching: state.usersPage.isFetching,
  //   userId: state.profilePage.profile.data.userId,
  //   disable: state.usersPage.disable
  // }))
  useEffect(() => {
    dispatch(getUsers(1, 20))
  }, [dispatch])

  return (
    <div className={'container'}>
      <div>
        <h1 className={styles.users__title}>Ищи друзей среди 4 пользователей</h1>
        <div className={styles.users__items}>
          {users.map((item) => <User id={item.id} name={item.name} photo={item.photos.large} followed={item.followed} disable={false} getProfilePage={() => null}/>)}
        </div>
      </div>
    </div>
  );
};