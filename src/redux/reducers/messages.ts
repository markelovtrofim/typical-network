import {MessagesType, NamesType} from "../../types"

const ADD_MESSAGE = 'messages/ADD_MESSAGE'

type initialStateType = {
  newMessageBody: string
  messages: Array<MessagesType>
  names: Array<NamesType>
}

let initialState = {
  newMessageBody: "normal message",
  messages: [
    {id: 1, message: 'First message'},
    {id: 2, message: 'Second message'},
    {id: 3, message: 'Third message'}],
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

const messages = (state = initialState, action: ActionType): initialStateType => {
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

export default messages