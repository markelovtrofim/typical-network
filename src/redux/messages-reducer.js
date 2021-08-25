const ADD_MESSAGE = 'messages/ADD_MESSAGE'

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
        {id: 6, name: 'Jordan'},],
};

const messagesReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let body = action.message;
            return {
                ...state,
                messages: [...state.messages, {id: 228, message: body}]
            }
        }
        default:
            return state;
    }
};

export const addMessage = (message) => ({type: ADD_MESSAGE, message});

export default messagesReducer;
