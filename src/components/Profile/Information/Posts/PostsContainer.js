import Posts from "./Posts";
import {addPost} from "../../../../redux/profile-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        name: state.profilePage.profile.data.fullName,
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        img: state.profilePage.profile.data.photos.small
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (post) => {
            dispatch(addPost(post));
        }
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default MyPostsContainer;
