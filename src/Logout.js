import * as React from 'react';
import { connect } from 'react-redux';
import { logout } from './Actions';
import FirebaseConnection from './FirebaseUtilities';

const mapStateToProps = (state) => {
    return {
        loginMessage: state.listReducer.loginMessage
    }
}

class LogoutComponent extends React.Component  {
    render() {
        return (
            <button className="btn btn-outline-primary ml-3" onClick={FirebaseConnection.logoutFirebaseUser}>Logout</button>   
        )
    }
}

export const Logout = connect(
    mapStateToProps
)(LogoutComponent);