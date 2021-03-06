import React from "react"
import {Post} from "./Post/Post"
import styles from "./Posts.module.css"
import {Field, reduxForm} from "redux-form"
import {Title} from "../../../../components/Title/Title"
import {Button} from "../../../../components/Button/Button"
import {useDispatch, useSelector} from "react-redux"
import {actions} from "../../../../redux/reducers/profile"

const PostsForm = (props: any) => {
  return <form className={styles.form} onSubmit={props.handleSubmit}>
    <Field className={styles.textarea} placeholder="Что у вас нового?" name="post" component="textarea"/>
    <Button>Опубликовать</Button>
  </form>
}
export const PostsFormRedux = reduxForm({form: "post"})(PostsForm)

export const Posts = () => {
  const dispatch = useDispatch()
  const state = useSelector((state: any) => ({
    name: state.profilePage.profile.data.fullName,
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
    img: state.profilePage.profile.data.photos.small
  }))
  let postsElement = state.posts.map((p: any) => <Post className={styles.general_post} img={state.img} name={state.name}
                                                       message={p.message} key={p.id}/>)
  const addPostCallBack = (post: any) => {
    dispatch(actions.addPost(post.post))
  }
  return <div className={styles.main}>
    <Title title="Публикации"/>
    <PostsFormRedux onSubmit={addPostCallBack}/>
    {postsElement}
  </div>
}