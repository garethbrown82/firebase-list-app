import * as React from 'react';
import { connect } from 'react-redux';
import { logout } from './Actions';

const mapStateToProps = (state) => {
    return {
        loginMessage: state.listReducer.loginMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
}

const LogoutComponent = (props) => {
    return (
        <button className="btn btn-outline-primary ml-3" onClick={props.logout}>Logout</button>   
    )
}

export const Logout = connect(
    mapStateToProps,
    mapDispatchToProps
)(LogoutComponent);