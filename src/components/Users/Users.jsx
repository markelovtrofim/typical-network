import React from "react";
import style from "./users.module.css";
import '../../App.css';
import User from "./User/User";
import Paginator from "./Pagination/Paginator";

const Users = (props) => {
    if (props.users.length === 0) {
        return <div></div>
    }
    return (
        <div className="container">
            <div className={style.general}>
                <h1 className={style.title}>Ищи друзей среди {props.totalUserCount} пользователей</h1>
                <User {...props}/>
                <Paginator onPageChanged={props.onPageChanged} totalUserCount={props.totalUserCount}
                           pageSize={props.pageSize} currentPage={props.currentPage}/>
            </div>
        </div>
    )
};

export default Users;
