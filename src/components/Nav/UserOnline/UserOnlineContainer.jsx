import React from 'react';
import {connect} from "react-redux";
import UserOnline from "./UserOnline";
import {getFreindsNavbar, getUsersOnline} from "../../../redux/navbar-reducer";
import {withRouter} from 'react-router-dom';
import {freindsAPI} from '../../../api/api'

class FreindOnline extends React.Component {
    // constructor(props) {
    //     super(props) 
    // }
    componentDidMount() {
        let pageNumber = 1;
        // axios.get('https://social-network.samuraijs.com/api/1.0/users?page=' + pageNumber+ '&count=' + this.props.totalUserCount, {withCredentials: true}).
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
