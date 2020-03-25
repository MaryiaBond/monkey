import React from 'react';
import {connect} from "react-redux";
import UserOnline from "./UserOnline";
import {getFreindsNavbar, getUsersOnline} from "../../../redux/navbar-reducer";
import {withRouter} from 'react-router-dom';

class FreindOnline extends React.Component {
    componentDidMount() {
        let pageNumber = 1;
        const {totalUserCount} = this.props
        this.props.getUsersOnline(pageNumber, totalUserCount);
    }
render(){
    return ( <UserOnline {...this.props}/> )
}
}
const mapStateToProps = (state) => ({
    freindsOnline: state.navBar.userData,
    totalUserCount: state.navBar.totalUserCount,
    userId: state.navBar.userId
})

let freindsDataComponentContainer = withRouter(FreindOnline);
export default connect(mapStateToProps, {getFreindsNavbar, getUsersOnline})(freindsDataComponentContainer);
