import React from 'react';
import styles from './Post.module.css';
import {Time} from '../../../General/ProfileGeneral';
import {Avatar} from '../../../General/ProfileGeneral';
import defaultUserImage from '../../../../../assets/img/default-user.png';

const Post = (props) => {
    if (props.message !== undefined){
        return (
            <div className={styles.item}>
                <Avatar width="50" height="50" img={props.img ? props.img : defaultUserImage}/>
                <div className={styles.post}>
                    <h3 className={styles.full_name}>{props.name}</h3>
                    <Time styles={styles.time} text="Пост был опубликован в пределах нашей эры."/>
                    <p className={styles.text}>{props.message}</p>
                </div>
            </div>
        )
    } else {
        return <div></div>
    }
};

export default Post;
