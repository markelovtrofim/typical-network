import React from 'react';
import {requestUsers} from '../../redux/reducers/users';
import {useDispatch} from "react-redux";
import {Formik, Form, Field} from 'formik';
import styles from './Pagination.module.scss';

interface PaginationPropsType {
  totalItemsCount: number
  pageSize: number
  portionSize: number
}

export const Pagination: React.FC<PaginationPropsType> = ({totalItemsCount, pageSize, portionSize}) => {
  const dispatch = useDispatch();
  const pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages = [];
  for (let i = 1; i < pagesCount + 1; i++) {
    pages.push(i);
  }
  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = React.useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;


  return (
    <>
      <div>
        {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>PREV</button>}
        <div>
          {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(item => <button onClick={() => dispatch(requestUsers(item, pageSize, {term: '', friends: null}))}
                                 style={{marginRight: '5px'}}>{item}</button>)}
        </div>
        {portionCount > portionNumber && <button onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button>}
      </div>
      <Formik initialValues={{ page: '' }}
              onSubmit={(values) => {
                dispatch(requestUsers(Number(values.page), pageSize, {term: '', friends: null}))
              }}
      >
        <Form className={styles.form}>
          <div className={styles.view}>Viewing</div>
          <div style={{display: 'flex'}}>
            <Field className={styles.input} name="page" type="text"/>
            <button className={styles.submit__button} type="submit">Submit</button>
          </div>
          <div className={styles.count}>of {pagesCount} pages</div>
        </Form>
      </Formik>
    </>
  );
};