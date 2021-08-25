import '../../index.css';
import {addMessage} from "../../redux/messages-reducer";
import Dialogs from "./dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        messages: state.messagesPage.messages,
        names: state.messagesPage.names,
        newMessageBody: state.messagesPage.newMessageBody,
        isAuth: state.auth.isAuth
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (message) => {
            dispatch(addMessage(message));
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
