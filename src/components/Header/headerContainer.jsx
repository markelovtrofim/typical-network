import React from 'react'
import './header.module.css'
import Header from './header';
import {connect} from 'react-redux';
import {setAuthUserData, getMe, logout} from '../../redux/auth-reducer';
import {getUserProfile} from "../../redux/profile-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getMe()
    };
    render() {
        return <Header {...this.props}/>
    };
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        id: state.auth.id,
        login: state.auth.login,
        email: state.auth.email,
        navData: state.navbar.navData,
        profile: state.profilePage.profile
    }
};

export default connect(mapStateToProps, {setAuthUserData, getMe, logout, getUserProfile})(HeaderContainer);
