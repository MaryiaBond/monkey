import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getPhoto, getStatus, getUserProfile, updateStatus} from '../../redux/profile-reducer';
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getAuthUserId, getIsAuth, getProfileInfo, getProfileStatus} from "../../redux/users-selectors";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push('/login')
            }
            // userId = 1625;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }
    render() {

        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        );
    }
}

// let AithRedirectComponent = (props) => {
//     if (!this.props.isAuth) return <Redirect to={'/login'} />
//     return <ProfileContainer {...props} />
// }
let mapStateToProps = (state) => ({
    profile: getProfileInfo(state),
    status: getProfileStatus(state),
    authorizedUserId: getAuthUserId(state),
    isAuth: getIsAuth(state)
})

export default compose(connect(mapStateToProps,{getUserProfile, getStatus, updateStatus, getPhoto}),withAuthRedirect,withRouter)(ProfileContainer)