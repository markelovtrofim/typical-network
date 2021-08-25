import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Visit my website.", likesCount: "111"},
                {id: 2, message: "Girls write me.", likesCount: "111"},
                {id: 3, message: "Elon Musk is a genius.", likesCount: "537"},
                {id: 4, message: "Hi mom, i'm on the best social network in the world!", likesCount: "228"},
                {id: 5, message: "I wanna go mars!", likesCount: "111"},
                {id: 6, message: "Tramp top.", likesCount: "537"},
                {id: 7, message: "I not gay.", likesCount: "228"},
            ],
            newPostText: "it-penis.com"
        },
        messagesPage: {
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
        }
    },
    getState(){
        return this._state;
    },
    _callSubscriber(){
        console.log("Changing")
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },
    dispatch(action){
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._callSubscriber(this._state);
    }
};

export default store;
