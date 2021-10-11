import React from "react"
import {Dialog} from "./DialogItem/DialogItem"
import {Message} from "./Message/Message"
import {Field, reduxForm} from "redux-form"
import style from "./Dialogs.module.css"
import {useDispatch, useSelector} from "react-redux"
import {addMessage} from "../../redux/messages-reducer"

const DialogsForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name="message" component="textarea"/>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
const DialogsFormRedux = reduxForm({form: "message"})(DialogsForm)

export const Dialogs: React.FC = () => {
    const state = useSelector((state: any) => ({
        messages: state.messagesPage.messages,
        names: state.messagesPage.names,
    }))
    const dispatch = useDispatch()
    let messagesElement = state.messages.map ((m: any) => <Message message={m.message} key={m.id}/>)
    let namesElement = state.names.map ((m: any)=> <Dialog name={m.name} id={m.id} key={m.id}/>)
    const addMessageCallBack = (message: any) => { // Хз как типизировать, onSubmit error выдает.
        dispatch(addMessage(message.message))
        message.message = ''
    }
    return <div>
        <div className={style.general}>
            <div className={style.contact}>
                {namesElement}
            </div>
            <div className={style.messages__content}>
                <div className={style.messages__inner}>
                    {messagesElement}
                    <DialogsFormRedux onSubmit={addMessageCallBack}/>
                </div>
            </div>
        </div>
    </div>
}