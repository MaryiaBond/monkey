import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getInfo, getPhoto, getStatus, getUserProfile, updateStatus} from '../../redux/profile-reducer';
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getAuthUserId, getIsAuth, getProfileInfo, getProfileStatus} from "../../redux/users-selectors";


class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }
    componentDidMount() {
        this.refreshProfile()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {

        return (
            <Profile {...this.props}
                     isOwner={!this.props.match.params.userId}
                     profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: getProfileInfo(state),
    status: getProfileStatus(state),
    authorizedUserId: getAuthUserId(state),
    isAuth: getIsAuth(state)
})

export default compose(connect(mapStateToProps,{getUserProfile, getStatus, updateStatus, getPhoto, getInfo}),withAuthRedirect,withRouter)(ProfileContainer)