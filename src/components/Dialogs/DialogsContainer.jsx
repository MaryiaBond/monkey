import React from 'react';
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getDialogPage} from "../../redux/users-selectors";

let mapStateToProps = (state) => (
     {
        state: getDialogPage(state)
    }
)
export default compose (connect(mapStateToProps),withAuthRedirect)(Dialogs)
