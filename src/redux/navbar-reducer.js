const initialState = {
    navData: [
        {id: 1, link: "/users", text: "Друзья"},
        {id: 2, link: "/messages", text: "Мессенджер"},
        {id: 3, link: "/news", text: "Новости"},
        {id: 4, link: "/music", text: "Музыка"},
        {id: 5, link: "/settings", text: "Настройки"}
    ]
};

const navbarReducer = (state=initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default navbarReducer;
