import React from "react";
import {connect} from "react-redux";
import {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    getUsers,
    changeUsers,
    isFollow,
    isUnFollow,
    updateCurrentPage
} from "../../redux/user-reducer";
import Users from "./Users";

class UsersCont extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    };

    onPageChanged = (p) => {
        this.props.changeUsers(p, this.props.pageSize);
    };

    render() {
        return <Users totalUserCount={this.props.totalUserCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      unfollow={this.props.unfollow}
                      follow={this.props.follow}
                      isFetching={this.props.isFetching}
                      buttonsIsBlock={this.props.buttonsIsBlock}
                      isFollow={this.props.isFollow}
                      isUnFollow={this.props.isUnFollow}
                      totalUsers={this.props.totalUsers}
                      updateCurrentPage={this.props.updateCurrentPage}/>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
};

const UsersContainer = connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage,
    setTotalUsersCount, getUsers, changeUsers,
    isFollow, isUnFollow, updateCurrentPage})(UsersCont);

export default UsersContainer;
