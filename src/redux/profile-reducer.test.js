import profileReducer, {addPost} from "./profile-reducer";
import React from "react";

test('length of posts should be incremented', () => {
    // 1: test data
    let state = {
        posts: [
            {id: 1, message: "Привет меня зовут Маркелов Трофим я программист.", likesCount: "1 million"},
            {id: 2, message: "Lorem Ipsum - это текст-\"рыба\", часто используемый в печати и вэб-дизайне.", likesCount: "7 billion 800 million"},
            {id: 3, message: "Lorem Ipsum является стандартной \"рыбой\" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал " +
                             "большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.", likesCount: "8 billion"}
        ]
    }
    let action = addPost("it-kama-pula");

    // 2: action
    let newState = profileReducer(state, action);

    // expectation
    expect(newState.posts.length).toBe(4)

});
