import React from 'react';
import classes from './ProfileStatus.module.css'


 class ProfileStatus extends React.Component {
      state = {
        status: this.props.props,
        editMode: false
     }
     activateEditMode = () => {
        this.setState(
            {
                editMode: true
            }
        )
     }
    deactivateEditMode = () => {
        this.setState(
            {
                editMode: false
            }
        );
        this.props.updateStatus(this.state.status);
        }
     onStatusChange = (e) => {
         this.setState({
             status: e.currentTarget.value
         })

     }
     componentDidUpdate(prevProps, prevState) {
          if (prevProps.props !== this.props.props) {
             this.setState({
                 status:this.props.props
             })
          }
     }

     render() {
    return (
        <div>
            {this.state.editMode ?
            <div><input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} className={classes.status}/></div>
            :
            <div> <span onDoubleClick={this.activateEditMode}>{this.state.status}</span></div>
        }
        </div>
    )
}
 }

 export default ProfileStatus;