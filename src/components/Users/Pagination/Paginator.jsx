import React from "react";
import styles from "./Paginator.module.css";
import {Field, reduxForm} from "redux-form";
import {PagLeftArrowSvg, PagRightArrowSvg} from "../../common/Svg";

const UserForm = (props) => {
    return (
        <form className={styles.form} onSubmit={props.handleSubmit}>
            <Field className={styles.input} autocomplete="off" name="search" border="0" component="input"/>
        </form>
    )
}

const UserReduxForm = reduxForm({form: "search"})(UserForm)

const Paginator = (props) => {
    let pageCount = Math.ceil(props.totalUserCount / props.pageSize);

    const updateCurrentPage = (cp) => {
        let newCurrentPage = Number(cp.search)
        if (newCurrentPage <= pageCount && newCurrentPage > 0) {
            props.onPageChanged(newCurrentPage)
            cp.search = '';
        }
    }

    return (
        <div className={styles.paginator}>
            <div className={styles.view}>Viewing</div>
            <button className={styles.button} onClick={() => {props.onPageChanged(props.currentPage - 1)}}><PagLeftArrowSvg className={styles.arrow}/></button>
            <UserReduxForm onSubmit={updateCurrentPage}/>
            <button className={styles.button} onClick={() => {props.onPageChanged(props.currentPage + 1)}}><PagRightArrowSvg className={styles.arrow}/></button>
            <div className={styles.count}>of {pageCount} pages</div>
        </div>
    )
};

export default Paginator;