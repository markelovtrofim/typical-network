import React from "react";
import '../../../App.css';
import styles from "./ProfileInfo.module.css";
import PostsContainer from "./Posts/PostsContainer";
import Chair from "./Chair/Chair";

let ProfileInfo = ({profile, title}) => {
    return (
        <div>
            <div className="container">
                <div className={styles.inner}>
                    <Chair profile={profile} title={title}/>
                    <PostsContainer/>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;
