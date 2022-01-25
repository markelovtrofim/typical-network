import React, {useEffect} from 'react';
import {User} from './User';
import {useDispatch, useSelector} from 'react-redux';
import styles from "./Users.module.scss";
import {
  getUsersSelector,
  getTotalUsersCountSelector,
  getPageSizeSelector,
  getIsLoadingSelector
} from "../../redux/selectors/users.selector";
import {requestUsers} from "../../redux/reducers/users";
import {Pagination} from "../../components/Pagination";
import Footer from "../Footer/Footer";
import preloader from '../../assets/img/preloader.svg';
import {Formik, Form, Field} from "formik";

const Users = () => {
  const dispatch = useDispatch();

  const users = useSelector(getUsersSelector);
  const totalUsersCount = useSelector(getTotalUsersCountSelector);
  const pageSize = useSelector(getPageSizeSelector);
  const isLoading = useSelector(getIsLoadingSelector);

  useEffect(() => {
    dispatch(requestUsers(1, 20, {term: '', friends: null}))
  }, [dispatch])

  if (isLoading) return <div className={'container'}><img style={{textAlign: 'center'}} src={preloader} alt=""/></div>
  return (
    <>
      <div className={'container'}>
        <div style={{display: 'flex'}}>
          <h1 className={styles.users__title}>Ищи друзей среди {totalUsersCount} пользователей</h1>
          <Formik initialValues={{
            search: ''
          }} onSubmit={(values) => {
            dispatch(requestUsers(1, pageSize, {term: values.search, friends: null}));
          }}>
            <Form>
              <Field name={'search'} type={'text'}/>
              <button type={'submit'}>Click</button>
            </Form>
          </Formik>
        </div>
        <div className={styles.users__items}>
          {users.map((item: any) => <User id={item.id} name={item.name} photo={item.photos.large} followed={item.followed}
                                     disable={false} getProfilePage={() => null}/>)}
        </div>
        <Pagination totalItemsCount={totalUsersCount} pageSize={pageSize} portionSize={10}/>
      </div>
      <Footer/>
    </>
  );
};

export default Users;