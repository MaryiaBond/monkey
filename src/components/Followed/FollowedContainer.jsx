import React from "react";
import {connect} from "react-redux";
import FollowedUsers from "./Followed";
import Preloader from '../../assets/common/Preloader/Preloader';
import {getFreindsNavbar, getUsersOnline} from "../../redux/navbar-reducer";

class FollowedComponent extends React.Component {
    componentDidMount() {
        let pageNumber = 1;
        const {totalUserCount} = this.props
        this.props.getUsersOnline(pageNumber, totalUserCount);
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
               <FollowedUsers {...this.props}/>
            </>)
    }
}

let mapStateToProps = (state) => {
    return {
        freindsOnline: state.navBar.userData,
        totalUserCount: state.navBar.totalUserCount,
        userId: state.navBar.userId
    }
}
const FollowedContainer = connect(mapStateToProps, {getFreindsNavbar, getUsersOnline})(FollowedComponent);
export default FollowedContainer;