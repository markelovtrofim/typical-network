import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {getUserProfile, drawLoad, owner, savePhoto, saveProfile} from "../../redux/profile-reducer";
import {logout} from "../../redux/auth-reducer";
import {withRouter} from "react-router-dom";

class Profiles extends React.Component {
    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.userId
        }
        if (this.props.userId === Number(this.props.match.params.userId)) {
            this.props.owner(true)
        } else {
            this.props.owner(false)
        }
        this.props.getUserProfile(userId);
    }
    componentDidMount() {
        this.refreshProfile();
    };
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }
    render() {
        return <Profile {...this.props} saveProfile={this.props.saveProfile} savePhoto={this.props.savePhoto} logout={this.props.logout}/>
    }
}

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        userId: state.auth.id,
        isAuth: state.auth.isAuth,
    }
};

export default connect(mapStateToProps, {getUserProfile, drawLoad, owner, savePhoto, logout, saveProfile})(withRouter(Profiles));
