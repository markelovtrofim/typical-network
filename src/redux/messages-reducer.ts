import {MessagesType, NamesType} from "../types/types"

const ADD_MESSAGE = 'messages/ADD_MESSAGE'

type initialStateType = {
    newMessageBody: string
    messages: Array<MessagesType>
    names: Array<NamesType>
}

let initialState = {
    newMessageBody: "pines",
    messages: [
        {id: 1, message: 'Your Aboba.'},
        {id: 2, message: 'No! Your Aboba.'},
        {id: 3, message: 'Ok. We Aboba!'}],
    names: [
        {id: 1, name: 'Johnny'},
        {id: 2, name: 'Olga'},
        {id: 3, name: 'Mia'},
        {id: 4, name: 'Rici'},
        {id: 5, name: 'Lola'},
        {id: 6, name: 'Jordan'},
    ]
}

type ActionType = addMessageType

const messagesReducer = (state=initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let body = action.message;
            return {
                ...state,
                messages: [...state.messages, {id: 228, message: body}]
            }
        }
        default:
            return state
    }
}

type addMessageType = {
    type: typeof ADD_MESSAGE
    message: string
}
export const addMessage = (message: string): addMessageType => ({type: ADD_MESSAGE, message})

export default messagesReducer