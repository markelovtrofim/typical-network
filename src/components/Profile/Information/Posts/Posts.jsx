import React from 'react';
import Post from './Post/Post';
import styles from './Posts.module.css';
import {Field, reduxForm} from "redux-form";
import {Title} from '../../../common/Title/Title';
import {Button} from "../../../common/Button/Button";


const PostsForm = (props) => {
    return (
        <form className={styles.form} onSubmit={props.handleSubmit}>
            <Field className={styles.textarea} placeholder="Что у вас нового?" name="post" component="textarea"/>
            <Button text="Опубликовать"/>
        </form>
    )
}

export const PostsFormRedux = reduxForm({form: "post"})(PostsForm)

const Posts = (props) => {
    let postsElement = props.posts.map( p => <Post className={styles.general_post} img={props.img} name={props.name} message={p.message} key={p.id}/>);

    const addPost = (post) => {
        props.addPost(post.post);
    }

    return (
        <div className={styles.main}>
            <Title title="Публикации"/>
            <PostsFormRedux onSubmit={addPost}/>
            {postsElement}
        </div>
    )
};

export default Posts;
