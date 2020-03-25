import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from '../../assets/common/Preloader/Preloader';
import {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress, getUsersAction,

} from "../../redux/users-reducer";
import {
    getCurrentPage, getFollowingProgress,
    getPageSize,
    getToggleIfFetching,
    getTotalUserCount,
    getUsers
} from "../../redux/users-selectors";

class UsersComponent extends React.Component {
    // constructor(props) {
    //     super(props) 
    // }
    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.getUsersAction(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersAction(pageNumber, this.props.pageSize);
    }
setCurrentPage = (currentPage) => {
    this.props.getUsersAction(currentPage);
    return currentPage
}
    render() {

        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users totalUserCount={this.props.totalUserCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       setCurrentPage={this.setCurrentPage}
                       onPageChanged={this.onPageChanged}
                       users={this.props.users}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       toggleFollowingProgress={this.props.toggleFollowingProgress}
                       followingInProgress={this.props.followingInProgress}

                />
            </>)
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getToggleIfFetching(state),
        followingInProgress: getFollowingProgress(state)
    }
}
const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsersAction
})(UsersComponent);
export default UsersContainer;